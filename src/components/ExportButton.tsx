
import React from 'react';
import html2canvas from 'html2canvas';
import { Button } from '@/components/ui/button';
import { Download, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export const ExportButton: React.FC = () => {
  const [isExporting, setIsExporting] = React.useState(false);

  const exportAsImage = async () => {
    setIsExporting(true);
    
    try {
      const element = document.getElementById('image-content');
      if (!element) {
        toast.error('未找到要导出的内容');
        return;
      }

      // 创建高质量截图
      const canvas = await html2canvas(element, {
        useCORS: true,
        allowTaint: false,
        scale: 2, // 提高图片质量
        backgroundColor: null,
        width: 400,
        height: element.scrollHeight,
      });

      // 转换为blob并下载
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `xiaohongshu-post-${Date.now()}.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
          
          toast.success('图片已成功下载到本地！');
        }
      }, 'image/png', 1.0);
      
    } catch (error) {
      console.error('导出失败:', error);
      toast.error('导出失败，请重试');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <Button
      onClick={exportAsImage}
      disabled={isExporting}
      className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 font-noto"
      size="lg"
    >
      {isExporting ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          导出中...
        </>
      ) : (
        <>
          <Download className="mr-2 h-4 w-4" />
          下载图片
        </>
      )}
    </Button>
  );
};
