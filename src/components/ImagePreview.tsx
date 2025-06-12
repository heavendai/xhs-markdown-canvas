
import React, { useEffect, useRef } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { Card } from '@/components/ui/card';

interface ImagePreviewProps {
  markdown: string;
  signature?: string;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({ 
  markdown, 
  signature = "Created with ❤️" 
}) => {
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (previewRef.current && markdown) {
      const html = marked(markdown);
      const sanitizedHtml = DOMPurify.sanitize(html);
      previewRef.current.innerHTML = sanitizedHtml;
    }
  }, [markdown]);

  return (
    <Card className="h-full p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
      <div className="mb-4">
        <h2 className="text-xl font-semibold font-noto text-gray-800 mb-2">
          🎨 预览效果
        </h2>
        <p className="text-sm text-gray-600 font-noto">
          这就是你的文案生成的图片效果
        </p>
      </div>
      
      <div className="flex justify-center">
        <div 
          id="image-content"
          className="relative bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 rounded-3xl shadow-2xl overflow-hidden"
          style={{ width: '400px', minHeight: '500px' }}
        >
          {/* 装饰性背景图案 */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 right-10 w-20 h-20 bg-pink-300 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 left-10 w-16 h-16 bg-purple-300 rounded-full blur-lg"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-200 rounded-full blur-2xl"></div>
          </div>
          
          {/* 主要内容区域 */}
          <div className="relative z-10 p-8 h-full flex flex-col">
            <div 
              ref={previewRef}
              className="flex-1 font-noto text-gray-800 leading-relaxed prose prose-pink max-w-none"
              style={{
                fontSize: '16px',
                lineHeight: '1.6'
              }}
            />
            
            {/* 签名区域 */}
            <div className="mt-8 text-center">
              <div className="inline-block px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full shadow-sm">
                <span className="text-sm font-medium text-gray-600 font-inter">
                  {signature}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
