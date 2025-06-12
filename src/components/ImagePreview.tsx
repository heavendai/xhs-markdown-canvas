
import React, { useEffect, useRef } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { Card } from '@/components/ui/card';

interface ImagePreviewProps {
  markdown: string;
  signature?: string;
  colorScheme?: string;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({ 
  markdown, 
  signature = "Created with ❤️",
  colorScheme = "cherry-blossom"
}) => {
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (previewRef.current && markdown) {
      // 使用 async/await 处理 marked 的返回值
      const processMarkdown = async () => {
        const html = await marked(markdown);
        const sanitizedHtml = DOMPurify.sanitize(html);
        if (previewRef.current) {
          previewRef.current.innerHTML = sanitizedHtml;
        }
      };
      processMarkdown();
    }
  }, [markdown]);

  const getColorSchemeClasses = (scheme: string) => {
    switch (scheme) {
      case 'mint-green':
        return 'bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100';
      case 'sunset-orange':
        return 'bg-gradient-to-br from-orange-100 via-pink-50 to-yellow-100';
      case 'ocean-blue':
        return 'bg-gradient-to-br from-blue-100 via-cyan-50 to-indigo-100';
      case 'violet-purple':
        return 'bg-gradient-to-br from-purple-100 via-violet-50 to-indigo-100';
      case 'milk-tea':
        return 'bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50';
      default: // cherry-blossom
        return 'bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100';
    }
  };

  const getDecorationColors = (scheme: string) => {
    switch (scheme) {
      case 'mint-green':
        return {
          color1: 'bg-green-300',
          color2: 'bg-emerald-300',
          color3: 'bg-teal-200'
        };
      case 'sunset-orange':
        return {
          color1: 'bg-orange-300',
          color2: 'bg-pink-300',
          color3: 'bg-yellow-200'
        };
      case 'ocean-blue':
        return {
          color1: 'bg-blue-300',
          color2: 'bg-cyan-300',
          color3: 'bg-indigo-200'
        };
      case 'violet-purple':
        return {
          color1: 'bg-purple-300',
          color2: 'bg-violet-300',
          color3: 'bg-indigo-200'
        };
      case 'milk-tea':
        return {
          color1: 'bg-amber-300',
          color2: 'bg-orange-300',
          color3: 'bg-yellow-200'
        };
      default: // cherry-blossom
        return {
          color1: 'bg-pink-300',
          color2: 'bg-purple-300',
          color3: 'bg-indigo-200'
        };
    }
  };

  const decorationColors = getDecorationColors(colorScheme);

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
          className={`relative ${getColorSchemeClasses(colorScheme)} rounded-3xl shadow-2xl overflow-hidden`}
          style={{ width: '400px', minHeight: '500px' }}
        >
          {/* 装饰性背景图案 */}
          <div className="absolute inset-0 opacity-5">
            <div className={`absolute top-10 right-10 w-20 h-20 ${decorationColors.color1} rounded-full blur-xl`}></div>
            <div className={`absolute bottom-20 left-10 w-16 h-16 ${decorationColors.color2} rounded-full blur-lg`}></div>
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 ${decorationColors.color3} rounded-full blur-2xl`}></div>
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
