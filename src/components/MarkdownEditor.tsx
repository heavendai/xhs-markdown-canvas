
import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ value, onChange }) => {
  return (
    <Card className="h-full p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg flex flex-col">
      <div className="mb-4 flex-shrink-0">
        <h2 className="text-xl font-semibold font-noto text-gray-800 mb-2">
          ✨ Markdown 编辑器
        </h2>
        <p className="text-sm text-gray-600 font-noto">
          在这里输入你的文案，支持 Markdown 格式
        </p>
      </div>
      
      <div className="flex-1 min-h-0">
        <ScrollArea className="h-full">
          <Textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="# 今日分享 ✨

## 小红书文案技巧

- 💡 使用有趣的表情符号
- 🎨 清新的排版风格
- 📸 吸引人的标题

记得**关注我**哦～

> 让生活更有仪式感 🌸"
            className="min-h-[400px] resize-none font-noto text-base leading-relaxed border-0 bg-transparent focus:ring-0 focus:outline-none"
          />
        </ScrollArea>
      </div>
    </Card>
  );
};
