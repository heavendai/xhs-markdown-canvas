
import React, { useState } from 'react';
import { MarkdownEditor } from '@/components/MarkdownEditor';
import { ImagePreview } from '@/components/ImagePreview';
import { ExportButton } from '@/components/ExportButton';
import { SignatureInput } from '@/components/SignatureInput';

const Index = () => {
  const [markdown, setMarkdown] = useState(`# 今日分享 ✨

## 小红书文案技巧

- 💡 使用有趣的表情符号
- 🎨 清新的排版风格  
- 📸 吸引人的标题

记得**关注我**哦～

> 让生活更有仪式感 🌸`);

  const [signature, setSignature] = useState('Created with ❤️');

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* 顶部标题栏 */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-noto">
                小红书文案图片生成器
              </h1>
              <p className="text-sm text-gray-600 font-noto mt-1">
                将 Markdown 文本转换为精美的小红书风格图片
              </p>
            </div>
            <ExportButton />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* 签名设置 */}
        <div className="mb-6 max-w-md">
          <SignatureInput value={signature} onChange={setSignature} />
        </div>

        {/* 主要内容区域 */}
        <div className="grid lg:grid-cols-2 gap-8 h-[calc(100vh-200px)]">
          {/* 左侧编辑器 */}
          <div className="animate-fadeIn">
            <MarkdownEditor value={markdown} onChange={setMarkdown} />
          </div>

          {/* 右侧预览 */}
          <div className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            <ImagePreview markdown={markdown} signature={signature} />
          </div>
        </div>
      </div>

      {/* 底部装饰 */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 opacity-60"></div>
    </div>
  );
};

export default Index;
