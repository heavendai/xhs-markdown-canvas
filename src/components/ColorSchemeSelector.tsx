
import React from 'react';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface ColorSchemeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const colorSchemes = [
  {
    id: 'cherry-blossom',
    name: '🌸 樱花粉',
    description: '温柔浪漫',
    gradient: 'from-pink-100 via-purple-50 to-indigo-100'
  },
  {
    id: 'mint-green',
    name: '🌿 薄荷绿',
    description: '清新自然',
    gradient: 'from-green-100 via-emerald-50 to-teal-100'
  },
  {
    id: 'sunset-orange',
    name: '🌅 日落橙',
    description: '活力温暖',
    gradient: 'from-orange-100 via-pink-50 to-yellow-100'
  },
  {
    id: 'ocean-blue',
    name: '🌊 海洋蓝',
    description: '专业沉稳',
    gradient: 'from-blue-100 via-cyan-50 to-indigo-100'
  },
  {
    id: 'violet-purple',
    name: '💜 紫罗兰',
    description: '优雅梦幻',
    gradient: 'from-purple-100 via-violet-50 to-indigo-100'
  },
  {
    id: 'milk-tea',
    name: '🥛 奶茶色',
    description: '温馨舒适',
    gradient: 'from-amber-50 via-orange-50 to-yellow-50'
  },
  {
    id: 'deep-blue',
    name: '🔵 深邃蓝',
    description: '沉稳商务',
    gradient: 'from-slate-100 via-blue-50 to-gray-100'
  },
  {
    id: 'dark-gray',
    name: '⚫ 炫酷黑灰',
    description: '现代简约',
    gradient: 'from-gray-100 via-slate-50 to-zinc-100'
  },
  {
    id: 'military-green',
    name: '🪖 军绿色',
    description: '硬朗个性',
    gradient: 'from-green-100 via-slate-50 to-gray-100'
  },
  {
    id: 'steel-blue',
    name: '🔧 钢铁蓝',
    description: '工业风格',
    gradient: 'from-blue-100 via-gray-50 to-slate-100'
  }
];

export const ColorSchemeSelector: React.FC<ColorSchemeSelectorProps> = ({ value, onChange }) => {
  return (
    <Card className="p-4 bg-white/60 backdrop-blur-sm border-0 shadow-md">
      <Label className="font-noto text-sm font-medium text-gray-700 mb-3 block">
        🎨 配色方案
      </Label>
      <RadioGroup value={value} onValueChange={onChange} className="grid grid-cols-2 gap-3">
        {colorSchemes.map((scheme) => (
          <div key={scheme.id} className="flex items-center space-x-2">
            <RadioGroupItem value={scheme.id} id={scheme.id} />
            <label 
              htmlFor={scheme.id} 
              className="flex-1 cursor-pointer"
            >
              <div className="flex items-center space-x-2">
                <div 
                  className={`w-6 h-6 rounded-full bg-gradient-to-br ${scheme.gradient} border border-gray-200`}
                />
                <div>
                  <div className="text-xs font-medium font-noto text-gray-800">
                    {scheme.name}
                  </div>
                  <div className="text-xs text-gray-500 font-noto">
                    {scheme.description}
                  </div>
                </div>
              </div>
            </label>
          </div>
        ))}
      </RadioGroup>
    </Card>
  );
};
