

import React, { useEffect, useRef } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

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
      case 'morandi-gray':
        return 'bg-gradient-to-br from-gray-100 via-slate-50 to-stone-100';
      case 'champagne-gold':
        return 'bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50';
      case 'sage-green':
        return 'bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50';
      case 'dusty-rose':
        return 'bg-gradient-to-br from-rose-100 via-pink-50 to-orange-50';
      case 'midnight-blue':
        return 'bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100';
      case 'lavender-mist':
        return 'bg-gradient-to-br from-purple-50 via-violet-50 to-pink-50';
      default: // cherry-blossom
        return 'bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100';
    }
  };

  const getColorSchemeStyles = (scheme: string) => {
    switch (scheme) {
      case 'mint-green':
        return {
          h1: 'text-green-700',
          h2: 'text-emerald-700',
          h3: 'text-teal-700',
          text: 'text-green-800',
          strong: 'text-green-800',
          blockquote: 'border-green-400 bg-green-50 text-green-800',
          code: 'bg-green-100 text-green-700',
          decoration: {
            color1: 'bg-green-300',
            color2: 'bg-emerald-300',
            color3: 'bg-teal-200'
          }
        };
      case 'sunset-orange':
        return {
          h1: 'text-orange-700',
          h2: 'text-pink-700',
          h3: 'text-yellow-700',
          text: 'text-orange-800',
          strong: 'text-orange-800',
          blockquote: 'border-orange-400 bg-orange-50 text-orange-800',
          code: 'bg-orange-100 text-orange-700',
          decoration: {
            color1: 'bg-orange-300',
            color2: 'bg-pink-300',
            color3: 'bg-yellow-200'
          }
        };
      case 'ocean-blue':
        return {
          h1: 'text-blue-700',
          h2: 'text-cyan-700',
          h3: 'text-indigo-700',
          text: 'text-blue-800',
          strong: 'text-blue-800',
          blockquote: 'border-blue-400 bg-blue-50 text-blue-800',
          code: 'bg-blue-100 text-blue-700',
          decoration: {
            color1: 'bg-blue-300',
            color2: 'bg-cyan-300',
            color3: 'bg-indigo-200'
          }
        };
      case 'violet-purple':
        return {
          h1: 'text-purple-700',
          h2: 'text-violet-700',
          h3: 'text-indigo-700',
          text: 'text-purple-800',
          strong: 'text-purple-800',
          blockquote: 'border-purple-400 bg-purple-50 text-purple-800',
          code: 'bg-purple-100 text-purple-700',
          decoration: {
            color1: 'bg-purple-300',
            color2: 'bg-violet-300',
            color3: 'bg-indigo-200'
          }
        };
      case 'milk-tea':
        return {
          h1: 'text-amber-700',
          h2: 'text-orange-700',
          h3: 'text-yellow-700',
          text: 'text-amber-800',
          strong: 'text-amber-800',
          blockquote: 'border-amber-400 bg-amber-50 text-amber-800',
          code: 'bg-amber-100 text-amber-700',
          decoration: {
            color1: 'bg-amber-300',
            color2: 'bg-orange-300',
            color3: 'bg-yellow-200'
          }
        };
      case 'morandi-gray':
        return {
          h1: 'text-gray-700',
          h2: 'text-slate-700',
          h3: 'text-stone-700',
          text: 'text-gray-800',
          strong: 'text-gray-800',
          blockquote: 'border-gray-400 bg-gray-50 text-gray-800',
          code: 'bg-gray-100 text-gray-700',
          decoration: {
            color1: 'bg-gray-300',
            color2: 'bg-slate-300',
            color3: 'bg-stone-200'
          }
        };
      case 'champagne-gold':
        return {
          h1: 'text-yellow-700',
          h2: 'text-amber-700',
          h3: 'text-orange-700',
          text: 'text-yellow-800',
          strong: 'text-yellow-800',
          blockquote: 'border-yellow-400 bg-yellow-50 text-yellow-800',
          code: 'bg-yellow-100 text-yellow-700',
          decoration: {
            color1: 'bg-yellow-300',
            color2: 'bg-amber-300',
            color3: 'bg-orange-200'
          }
        };
      case 'sage-green':
        return {
          h1: 'text-emerald-700',
          h2: 'text-green-700',
          h3: 'text-lime-700',
          text: 'text-emerald-800',
          strong: 'text-emerald-800',
          blockquote: 'border-emerald-400 bg-emerald-50 text-emerald-800',
          code: 'bg-emerald-100 text-emerald-700',
          decoration: {
            color1: 'bg-emerald-300',
            color2: 'bg-green-300',
            color3: 'bg-lime-200'
          }
        };
      case 'dusty-rose':
        return {
          h1: 'text-rose-700',
          h2: 'text-pink-700',
          h3: 'text-orange-700',
          text: 'text-rose-800',
          strong: 'text-rose-800',
          blockquote: 'border-rose-400 bg-rose-50 text-rose-800',
          code: 'bg-rose-100 text-rose-700',
          decoration: {
            color1: 'bg-rose-300',
            color2: 'bg-pink-300',
            color3: 'bg-orange-200'
          }
        };
      case 'midnight-blue':
        return {
          h1: 'text-slate-700',
          h2: 'text-blue-700',
          h3: 'text-indigo-700',
          text: 'text-slate-800',
          strong: 'text-slate-800',
          blockquote: 'border-slate-400 bg-slate-50 text-slate-800',
          code: 'bg-slate-100 text-slate-700',
          decoration: {
            color1: 'bg-slate-300',
            color2: 'bg-blue-300',
            color3: 'bg-indigo-200'
          }
        };
      case 'lavender-mist':
        return {
          h1: 'text-purple-700',
          h2: 'text-violet-700',
          h3: 'text-pink-700',
          text: 'text-purple-800',
          strong: 'text-purple-800',
          blockquote: 'border-purple-400 bg-purple-50 text-purple-800',
          code: 'bg-purple-100 text-purple-700',
          decoration: {
            color1: 'bg-purple-300',
            color2: 'bg-violet-300',
            color3: 'bg-pink-200'
          }
        };
      default: // cherry-blossom
        return {
          h1: 'text-pink-700',
          h2: 'text-purple-700',
          h3: 'text-indigo-700',
          text: 'text-pink-800',
          strong: 'text-pink-800',
          blockquote: 'border-pink-400 bg-pink-50 text-pink-800',
          code: 'bg-pink-100 text-pink-700',
          decoration: {
            color1: 'bg-pink-300',
            color2: 'bg-purple-300',
            color3: 'bg-indigo-200'
          }
        };
    }
  };

  const colorStyles = getColorSchemeStyles(colorScheme);

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
      
      <ScrollArea className="h-[calc(100vh-280px)]">
        <div className="flex justify-center">
          <div 
            id="image-content"
            className={`relative ${getColorSchemeClasses(colorScheme)} rounded-3xl shadow-2xl overflow-hidden`}
            style={{ width: '400px', minHeight: '500px' }}
          >
            {/* 装饰性背景图案 */}
            <div className="absolute inset-0 opacity-5">
              <div className={`absolute top-10 right-10 w-20 h-20 ${colorStyles.decoration.color1} rounded-full blur-xl`}></div>
              <div className={`absolute bottom-20 left-10 w-16 h-16 ${colorStyles.decoration.color2} rounded-full blur-lg`}></div>
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 ${colorStyles.decoration.color3} rounded-full blur-2xl`}></div>
            </div>
            
            {/* 主要内容区域 */}
            <div className="relative z-10 p-8 h-full flex flex-col">
              <div 
                ref={previewRef}
                className={`flex-1 font-noto leading-relaxed prose max-w-none ${colorStyles.text}`}
                style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  '--prose-h1-color': colorStyles.h1.replace('text-', ''),
                  '--prose-h2-color': colorStyles.h2.replace('text-', ''),
                  '--prose-h3-color': colorStyles.h3.replace('text-', ''),
                  '--prose-strong-color': colorStyles.strong.replace('text-', ''),
                  '--prose-blockquote-border': colorStyles.blockquote.split(' ')[0].replace('border-', ''),
                  '--prose-blockquote-bg': colorStyles.blockquote.split(' ')[1].replace('bg-', ''),
                  '--prose-blockquote-color': colorStyles.blockquote.split(' ')[2].replace('text-', ''),
                  '--prose-code-bg': colorStyles.code.split(' ')[0].replace('bg-', ''),
                  '--prose-code-color': colorStyles.code.split(' ')[1].replace('text-', '')
                } as React.CSSProperties}
              />
              
              {/* 签名区域 */}
              <div className="mt-8 text-center">
                <div className="inline-block px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full shadow-sm">
                  <span className={`text-sm font-medium font-inter ${colorStyles.text}`}>
                    {signature}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </Card>
  );
};

