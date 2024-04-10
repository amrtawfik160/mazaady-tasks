'use client';

import { Category, Property } from '@/@types/database';
import { SelectedValue, OptionChild } from '@/@types/types';
import PropertyInput from '@/components/PropertyInput';
import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { SelectComponent } from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import apiClient from '@/lib/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  mainCategory: z.custom(
    (value: any) => {
      if (value.value) {
        return true;
      }
      return false;
    },
    { message: 'Main Category is required' }
  ),
  subCategory: z.custom(
    (value: any) => {
      if (value.value) {
        return true;
      }
      return false;
    },
    { message: 'Sub Category is required' }
  )
});

export default function Task1() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      mainCategory: {} as { value: number; label: string },
      subCategory: {} as { value: number; label: string }
    }
  });

  const [categories, setCategories] = useState<Category[]>([]);
  const [properties, setProperties] = useState<Property[]>([]);
  const [optionsChild, setOptionsChild] = useState<OptionChild>({});

  const [selectedValues, setSelectedValues] = useState<SelectedValue[]>([]);
  const [showTable, setShowTable] = useState<boolean>(false);

  const fetchCategories = async () => {
    try {
      const data: {
        categories: Category[];
      } = await apiClient.get('/get_all_cats');
      setCategories(data.categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchProperties = async (mainCategoryId: number) => {
    try {
      const data: Property[] = await apiClient.get(`/properties?cat=${mainCategoryId}`);
      setProperties(data);
    } catch (error) {
      console.error('Error fetching sub-categories:', error);
    }
  };

  const fetchOptionsChild = async (propertyId: number, childId: number) => {
    try {
      const data = await apiClient.get(`/get-options-child/${childId}`);
      setOptionsChild((prev: OptionChild) => ({ ...prev, [propertyId]: data }));
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const handleMainCategoryChange = (data: { value: number; label: string }) => {
    if (data) {
      form.setValue(
        'mainCategory',
        {
          value: data.value,
          label: data.label
        },
        {
          shouldValidate: true
        }
      );
    } else {
      form.resetField('mainCategory');
    }
    form.resetField('subCategory');
    setProperties([]);
    setOptionsChild({});
    setSelectedValues([]);
  };

  const handleSubCategoryChange = (data: { value: number; label: string }) => {
    if (data) {
      form.setValue(
        'subCategory',
        {
          value: data.value,
          label: data.label
        },
        {
          shouldValidate: true
        }
      );
      fetchProperties(data.value);
    } else {
      form.resetField('subCategory');
    }
    setSelectedValues([]);
    setOptionsChild({});
  };

  const onSubmit = () => {
    setShowTable(true);
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center space-y-4 bg-gray-100 py-16">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full max-w-[700px] flex-col space-y-3 rounded-md bg-white p-5"
        >
          <FormField
            control={form.control}
            name="mainCategory"
            render={() => (
              <FormItem>
                <FormLabel>
                  Main Category
                  <span className="text-red-500">*</span>
                </FormLabel>
                <SelectComponent
                  id="mainCategory"
                  createAble={false}
                  isMulti={false}
                  value={form.watch('mainCategory').value ? form.watch('mainCategory') : null}
                  options={categories.map((category) => ({
                    value: category.id,
                    label: category.name
                  }))}
                  onChange={handleMainCategoryChange}
                  placeholder="Select Main Category"
                />
                <FormMessage />
              </FormItem>
            )}
          />

          {form.watch('mainCategory').value && (
            <FormField
              control={form.control}
              name="subCategory"
              render={() => (
                <FormItem>
                  <FormLabel>
                    Sub Category <span className="text-red-500">*</span>
                  </FormLabel>
                  <SelectComponent
                    createAble={false}
                    isMulti={false}
                    value={form.watch('subCategory').value ? form.watch('subCategory') : null}
                    options={
                      categories
                        .find((category) => category.id === form.watch('mainCategory').value)
                        ?.children.map((subCategory) => ({
                          value: subCategory.id,
                          label: subCategory.name
                        })) || []
                    }
                    onChange={handleSubCategoryChange}
                    placeholder="Select Sub Category"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {form.watch('subCategory').value &&
              properties.map((property) => {
                return (
                  <PropertyInput
                    key={property.id}
                    form={form}
                    property={property}
                    onFetchOptionsChild={fetchOptionsChild}
                    optionsChild={optionsChild}
                    setOptionsChild={setOptionsChild}
                    selectedValues={selectedValues}
                    setSelectedValues={setSelectedValues}
                  />
                );
              })}
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </Form>

      {showTable && (
        <div className="flex w-full max-w-[700px] flex-col space-y-3 rounded-md bg-white p-5">
          <Table>
            <TableCaption>Selected Properties</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Key</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {form.watch('mainCategory') && (
                <TableRow>
                  <TableCell>Main Category</TableCell>
                  <TableCell>{form.watch('mainCategory').label}</TableCell>
                </TableRow>
              )}
              {form.watch('subCategory') && (
                <TableRow>
                  <TableCell>Sub Category</TableCell>
                  <TableCell>{form.watch('subCategory').label}</TableCell>
                </TableRow>
              )}
              {selectedValues.map((selectedValue) => (
                <TableRow key={selectedValue.key.id}>
                  <TableCell>{selectedValue.key.name}</TableCell>
                  <TableCell>{selectedValue.value.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
