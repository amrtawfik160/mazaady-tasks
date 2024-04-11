'use client';

import { useState } from 'react';
import SectionContainer from '../SectionContainer';
import Tabs from '@/components/task2/Tabs';
import { Button } from '@/components/ui/button';
import addCircleIcon from '@/public/icons/add-circle.svg';
import Image from 'next/image';
import Products from './Products';

const tabs = ['Products', 'Articles', 'Reviews'];

export default function MainSection() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <SectionContainer className="col-span-3 lg:col-span-2 2xl:col-span-3">
      <div className="flex items-center justify-between">
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        <Button variant={'primary'} className="fixed bottom-7 right-7 md:static">
          <Image src={addCircleIcon} alt="Add circle icon" className="mr-1.5 h-5 w-5" />
          Add Review
        </Button>
      </div>

      {activeTab === 'Products' ? <Products /> : null}
    </SectionContainer>
  );
}
