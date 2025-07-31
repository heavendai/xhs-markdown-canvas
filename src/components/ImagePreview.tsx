
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

  const getBorderScheme = (scheme: string) => {
    switch (scheme) {
      case 'mint-green':
        return {
          outer: 'border-emerald-300/40',
          inner: 'border-teal-200/60',
          accent: 'emerald-400/20',
          corner: 'border-emerald-500/25'
        };
      case 'sunset-orange':
        return {
          outer: 'border-orange-300/40',
          inner: 'border-pink-200/60',
          accent: 'orange-400/20',
          corner: 'border-orange-500/25'
        };
      case 'ocean-blue':
        return {
          outer: 'border-blue-300/40',
          inner: 'border-cyan-200/60',
          accent: 'blue-400/20',
          corner: 'border-blue-500/25'
        };
      case 'violet-purple':
        return {
          outer: 'border-purple-300/40',
          inner: 'border-violet-200/60',
          accent: 'purple-400/20',
          corner: 'border-purple-500/25'
        };
      case 'milk-tea':
        return {
          outer: 'border-amber-300/40',
          inner: 'border-orange-200/60',
          accent: 'amber-400/20',
          corner: 'border-amber-500/25'
        };
      case 'morandi-gray':
        return {
          outer: 'border-gray-300/40',
          inner: 'border-slate-200/60',
          accent: 'gray-400/20',
          corner: 'border-gray-500/25'
        };
      case 'champagne-gold':
        return {
          outer: 'border-yellow-300/40',
          inner: 'border-amber-200/60',
          accent: 'yellow-400/20',
          corner: 'border-yellow-500/25'
        };
      case 'sage-green':
        return {
          outer: 'border-emerald-300/40',
          inner: 'border-green-200/60',
          accent: 'emerald-400/20',
          corner: 'border-emerald-500/25'
        };
      case 'dusty-rose':
        return {
          outer: 'border-rose-300/40',
          inner: 'border-pink-200/60',
          accent: 'rose-400/20',
          corner: 'border-rose-500/25'
        };
      case 'midnight-blue':
        return {
          outer: 'border-slate-300/40',
          inner: 'border-blue-200/60',
          accent: 'slate-400/20',
          corner: 'border-slate-500/25'
        };
      case 'lavender-mist':
        return {
          outer: 'border-purple-300/40',
          inner: 'border-violet-200/60',
          accent: 'purple-400/20',
          corner: 'border-purple-500/25'
        };
      default: // cherry-blossom
        return {
          outer: 'border-pink-300/40',
          inner: 'border-purple-200/60',
          accent: 'pink-400/20',
          corner: 'border-pink-500/25'
        };
    }
  };

  const getColorSchemeStyles = (scheme: string) => {
    switch (scheme) {
      case 'mint-green':
        return {
          h1Color: '16 185 129', // emerald-500
          h2Color: '5 150 105', // emerald-600
          h3Color: '4 120 87', // emerald-700
          textColor: '6 78 59', // emerald-800
          strongColor: '6 95 70', // emerald-700
          blockquoteBorder: '52 211 153', // emerald-400
          blockquoteBg: '209 250 229', // emerald-50
          blockquoteColor: '6 78 59', // emerald-800
          codeBg: '167 243 208', // emerald-200
          codeColor: '6 95 70', // emerald-700
          decoration: {
            color1: 'bg-green-300',
            color2: 'bg-emerald-300',
            color3: 'bg-teal-200'
          }
        };
      case 'sunset-orange':
        return {
          h1Color: '234 88 12', // orange-600
          h2Color: '219 39 119', // pink-600
          h3Color: '180 83 9', // amber-600
          textColor: '154 52 18', // orange-800
          strongColor: '194 65 12', // orange-700
          blockquoteBorder: '251 146 60', // orange-400
          blockquoteBg: '255 237 213', // orange-100
          blockquoteColor: '154 52 18', // orange-800
          codeBg: '254 215 170', // orange-200
          codeColor: '194 65 12', // orange-700
          decoration: {
            color1: 'bg-orange-300',
            color2: 'bg-pink-300',
            color3: 'bg-yellow-200'
          }
        };
      case 'ocean-blue':
        return {
          h1Color: '37 99 235', // blue-600
          h2Color: '8 145 178', // cyan-600
          h3Color: '79 70 229', // indigo-600
          textColor: '30 58 138', // blue-800
          strongColor: '29 78 216', // blue-700
          blockquoteBorder: '96 165 250', // blue-400
          blockquoteBg: '219 234 254', // blue-100
          blockquoteColor: '30 58 138', // blue-800
          codeBg: '191 219 254', // blue-200
          codeColor: '29 78 216', // blue-700
          decoration: {
            color1: 'bg-blue-300',
            color2: 'bg-cyan-300',
            color3: 'bg-indigo-200'
          }
        };
      case 'violet-purple':
        return {
          h1Color: '147 51 234', // purple-600
          h2Color: '124 58 237', // violet-600
          h3Color: '79 70 229', // indigo-600
          textColor: '88 28 135', // purple-800
          strongColor: '126 34 206', // purple-700
          blockquoteBorder: '196 181 253', // purple-300
          blockquoteBg: '243 232 255', // purple-100
          blockquoteColor: '88 28 135', // purple-800
          codeBg: '221 214 254', // purple-200
          codeColor: '126 34 206', // purple-700
          decoration: {
            color1: 'bg-purple-300',
            color2: 'bg-violet-300',
            color3: 'bg-indigo-200'
          }
        };
      case 'milk-tea':
        return {
          h1Color: '217 119 6', // amber-600
          h2Color: '234 88 12', // orange-600
          h3Color: '161 98 7', // yellow-600
          textColor: '146 64 14', // amber-800
          strongColor: '180 83 9', // amber-700
          blockquoteBorder: '251 191 36', // amber-400
          blockquoteBg: '254 243 199', // amber-100
          blockquoteColor: '146 64 14', // amber-800
          codeBg: '253 230 138', // amber-200
          codeColor: '180 83 9', // amber-700
          decoration: {
            color1: 'bg-amber-300',
            color2: 'bg-orange-300',
            color3: 'bg-yellow-200'
          }
        };
      case 'morandi-gray':
        return {
          h1Color: '75 85 99', // gray-600
          h2Color: '71 85 105', // slate-600
          h3Color: '87 83 78', // stone-600
          textColor: '31 41 55', // gray-800
          strongColor: '55 65 81', // gray-700
          blockquoteBorder: '156 163 175', // gray-400
          blockquoteBg: '243 244 246', // gray-100
          blockquoteColor: '31 41 55', // gray-800
          codeBg: '229 231 235', // gray-200
          codeColor: '55 65 81', // gray-700
          decoration: {
            color1: 'bg-gray-300',
            color2: 'bg-slate-300',
            color3: 'bg-stone-200'
          }
        };
      case 'champagne-gold':
        return {
          h1Color: '161 98 7', // yellow-600
          h2Color: '217 119 6', // amber-600
          h3Color: '234 88 12', // orange-600
          textColor: '133 77 14', // yellow-800
          strongColor: '161 98 7', // yellow-700
          blockquoteBorder: '250 204 21', // yellow-400
          blockquoteBg: '254 249 195', // yellow-100
          blockquoteColor: '133 77 14', // yellow-800
          codeBg: '254 240 138', // yellow-200
          codeColor: '161 98 7', // yellow-700
          decoration: {
            color1: 'bg-yellow-300',
            color2: 'bg-amber-300',
            color3: 'bg-orange-200'
          }
        };
      case 'sage-green':
        return {
          h1Color: '5 150 105', // emerald-600
          h2Color: '22 163 74', // green-600
          h3Color: '101 163 13', // lime-600
          textColor: '6 78 59', // emerald-800
          strongColor: '20 83 45', // emerald-700
          blockquoteBorder: '52 211 153', // emerald-400
          blockquoteBg: '209 250 229', // emerald-100
          blockquoteColor: '6 78 59', // emerald-800
          codeBg: '167 243 208', // emerald-200
          codeColor: '20 83 45', // emerald-700
          decoration: {
            color1: 'bg-emerald-300',
            color2: 'bg-green-300',
            color3: 'bg-lime-200'
          }
        };
      case 'dusty-rose':
        return {
          h1Color: '225 29 72', // rose-600
          h2Color: '219 39 119', // pink-600
          h3Color: '234 88 12', // orange-600
          textColor: '159 18 57', // rose-800
          strongColor: '190 18 60', // rose-700
          blockquoteBorder: '251 113 133', // rose-400
          blockquoteBg: '255 228 230', // rose-100
          blockquoteColor: '159 18 57', // rose-800
          codeBg: '254 205 211', // rose-200
          codeColor: '190 18 60', // rose-700
          decoration: {
            color1: 'bg-rose-300',
            color2: 'bg-pink-300',
            color3: 'bg-orange-200'
          }
        };
      case 'midnight-blue':
        return {
          h1Color: '71 85 105', // slate-600
          h2Color: '37 99 235', // blue-600
          h3Color: '79 70 229', // indigo-600
          textColor: '30 41 59', // slate-800
          strongColor: '51 65 85', // slate-700
          blockquoteBorder: '148 163 184', // slate-400
          blockquoteBg: '241 245 249', // slate-100
          blockquoteColor: '30 41 59', // slate-800
          codeBg: '226 232 240', // slate-200
          codeColor: '51 65 85', // slate-700
          decoration: {
            color1: 'bg-slate-300',
            color2: 'bg-blue-300',
            color3: 'bg-indigo-200'
          }
        };
      case 'lavender-mist':
        return {
          h1Color: '147 51 234', // purple-600
          h2Color: '124 58 237', // violet-600
          h3Color: '219 39 119', // pink-600
          textColor: '88 28 135', // purple-800
          strongColor: '126 34 206', // purple-700
          blockquoteBorder: '196 181 253', // purple-300
          blockquoteBg: '243 232 255', // purple-100
          blockquoteColor: '88 28 135', // purple-800
          codeBg: '221 214 254', // purple-200
          codeColor: '126 34 206', // purple-700
          decoration: {
            color1: 'bg-purple-300',
            color2: 'bg-violet-300',
            color3: 'bg-pink-200'
          }
        };
      default: // cherry-blossom
        return {
          h1Color: '219 39 119', // pink-600
          h2Color: '147 51 234', // purple-600
          h3Color: '79 70 229', // indigo-600
          textColor: '157 23 77', // pink-800
          strongColor: '190 24 93', // pink-700
          blockquoteBorder: '244 114 182', // pink-400
          blockquoteBg: '253 242 248', // pink-100
          blockquoteColor: '157 23 77', // pink-800
          codeBg: '252 231 243', // pink-200
          codeColor: '190 24 93', // pink-700
          decoration: {
            color1: 'bg-pink-300',
            color2: 'bg-purple-300',
            color3: 'bg-indigo-200'
          }
        };
    }
  };

  const colorStyles = getColorSchemeStyles(colorScheme);
  const borderScheme = getBorderScheme(colorScheme);

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
            className={`relative ${getColorSchemeClasses(colorScheme)} rounded-lg shadow-2xl overflow-hidden border-4 ${borderScheme.outer}`}
            style={{ width: '400px', minHeight: '500px' }}
          >
            {/* 专业边框装饰 */}
            <div className={`absolute inset-0 border-2 ${borderScheme.inner} rounded-lg`}></div>
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-${borderScheme.accent} to-transparent`}></div>
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-${borderScheme.accent} to-transparent`}></div>
            <div className={`absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-transparent via-${borderScheme.accent} to-transparent`}></div>
            <div className={`absolute top-0 bottom-0 right-0 w-1 bg-gradient-to-b from-transparent via-${borderScheme.accent} to-transparent`}></div>
            
            {/* 角落装饰线条 */}
            <div className={`absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 ${borderScheme.corner}`}></div>
            <div className={`absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 ${borderScheme.corner}`}></div>
            <div className={`absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 ${borderScheme.corner}`}></div>
            <div className={`absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 ${borderScheme.corner}`}></div>
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
                className="flex-1 font-noto leading-relaxed prose max-w-none"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: `rgb(${colorStyles.textColor})`,
                  '--prose-h1-color': colorStyles.h1Color,
                  '--prose-h2-color': colorStyles.h2Color,
                  '--prose-h3-color': colorStyles.h3Color,
                  '--prose-strong-color': colorStyles.strongColor,
                  '--prose-blockquote-border': colorStyles.blockquoteBorder,
                  '--prose-blockquote-bg': colorStyles.blockquoteBg,
                  '--prose-blockquote-color': colorStyles.blockquoteColor,
                  '--prose-code-bg': colorStyles.codeBg,
                  '--prose-code-color': colorStyles.codeColor
                } as React.CSSProperties}
              />
              
              {/* 签名区域 */}
              <div className="mt-8 text-center">
                <div className="inline-block px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full shadow-sm">
                  <span className="text-sm font-medium font-inter" style={{ color: `rgb(${colorStyles.textColor})` }}>
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
