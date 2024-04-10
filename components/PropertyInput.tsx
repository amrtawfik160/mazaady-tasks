'use client';

import { Property } from '@/@types/database';
import { FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SelectComponent } from '@/components/ui/select';
import { Label } from './ui/label';
import { SelectedValue } from '@/@types/types';

const PropertyInput = ({
  form,
  property,
  onFetchOptionsChild,
  optionsChild,
  setOptionsChild,
  setSelectedValues,
  selectedValues
}: {
  property: Property;
  form: any;
  onFetchOptionsChild: (propertyId: number, childId: number) => void;
  optionsChild: any;
  setOptionsChild: any;
  setSelectedValues: any;
  selectedValues: any;
}) => {
  const handlePropertyChange = (data: { value: string; label: string }, property: Property) => {
    const value = data.value;
    const oldProperty = selectedValues.find((item: SelectedValue) => item.key.id === property.id);

    // If the old property exists, remove child selections
    if (oldProperty) {
      let shouldRemoveChildren = false;
      if (optionsChild[oldProperty.key.id]) {
        shouldRemoveChildren = true;
      }

      const filteredValues = [...selectedValues];
      let index = filteredValues.length - 1;
      while (index >= 0 && shouldRemoveChildren) {
        if (filteredValues[index].key.id !== oldProperty.key.id) {
          // Remove child selections
          if (optionsChild[filteredValues[index]?.key.id]) {
            delete optionsChild[filteredValues[index].key.id];
          }

          filteredValues.splice(index, 1);
        }
        index--;
      }

      setSelectedValues(filteredValues);
    }

    const selectedChild = property.options.find((option) => option.id === +value);

    // If the selected child has a child, fetch options for the child
    if (selectedChild?.child) {
      onFetchOptionsChild(property.id, selectedChild.id);
    }

    // Update the selected values
    setSelectedValues((prevValues: SelectedValue[]) => {
      const existingIndex = prevValues.findIndex((item) => item.key.id === property.id);

      const updatedSelection = {
        key: {
          id: property.id,
          name: property.name
        },
        value: {
          id: selectedChild?.id || 'other',
          name: selectedChild?.name
        }
      };

      // If the property already exists, update it, otherwise add it
      return existingIndex !== -1
        ? [
            ...prevValues.slice(0, existingIndex),
            updatedSelection,
            ...prevValues.slice(existingIndex + 1)
          ]
        : [...prevValues, updatedSelection];
    });
  };

  const handleOtherInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValues((prevValues: SelectedValue[]) => {
      const existingIndex = prevValues.findIndex((item) => item.key.id === property.id);

      const updatedSelection = {
        key: {
          id: property.id,
          name: property.name
        },
        value: {
          id: 'other',
          name: e.target.value
        }
      };

      // If the property already exists, update it, otherwise add it
      return existingIndex !== -1
        ? [
            ...prevValues.slice(0, existingIndex),
            updatedSelection,
            ...prevValues.slice(existingIndex + 1)
          ]
        : [...prevValues, updatedSelection];
    });
  };

  return (
    <>
      <div>
        <Label>{property.name}</Label>
        <FormControl>
          <SelectComponent
            createAble={false}
            isMulti={false}
            options={[
              ...property.options.map((option) => ({
                value: option.id.toString(),
                label: option.name
              })),
              {
                value: 'other',
                label: 'Other'
              }
            ]}
            onChange={(value) => handlePropertyChange(value, property)}
            placeholder={`Select ${property.name}`}
          />
        </FormControl>

        {/* If the selected value is 'other', show an input field */}
        {selectedValues.find((item: SelectedValue) => item.key.id === property.id)?.value.id ===
          'other' && (
          <Input
            type="text"
            className="mt-1"
            onChange={handleOtherInputChange}
            placeholder={`Enter ${property.name}`}
          />
        )}
      </div>

      {/* If the selected child has options, render the child options */}
      {Array.isArray(optionsChild?.[property.id]) &&
        optionsChild[property.id].length > 0 &&
        optionsChild[property.id]?.map((property: Property) => {
          return (
            <PropertyInput
              key={property.id}
              form={form}
              property={property}
              setOptionsChild={setOptionsChild}
              setSelectedValues={setSelectedValues}
              selectedValues={selectedValues}
              onFetchOptionsChild={onFetchOptionsChild}
              optionsChild={optionsChild}
            />
          );
        })}
    </>
  );
};

export default PropertyInput;
