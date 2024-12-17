import * as React from 'react';

interface ContentSectionProps {
  title: string;
  content?: string;
  items?: string[];
}

export function ContentSection({ title, content, items }: ContentSectionProps) {
  return (
    <stackLayout className="bg-white p-4 rounded-lg shadow-sm">
      <label className="text-lg font-bold mb-2 text-gray-800" text={title} />
      
      {content && (
        <label className="text-gray-600" textWrap={true} text={content} />
      )}
      
      {items && items.length > 0 && (
        <stackLayout className="ml-4">
          {items.map((item, index) => (
            <gridLayout key={index} columns="auto, *" className="mb-2">
              <label col={0} className="text-blue-500 mr-2" text="•" />
              <label col={1} className="text-gray-600" textWrap={true} text={item} />
            </gridLayout>
          ))}
        </stackLayout>
      )}
    </stackLayout>
  );
}