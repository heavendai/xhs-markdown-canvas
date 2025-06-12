
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';

interface SignatureInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const SignatureInput: React.FC<SignatureInputProps> = ({ value, onChange }) => {
  return (
    <Card className="p-4 bg-white/60 backdrop-blur-sm border-0 shadow-md">
      <Label htmlFor="signature" className="font-noto text-sm font-medium text-gray-700">
        ✍️ 个人签名
      </Label>
      <Input
        id="signature"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="输入你的个人签名..."
        className="mt-2 font-noto border-0 bg-white/80 focus:ring-2 focus:ring-pink-300"
      />
    </Card>
  );
};
