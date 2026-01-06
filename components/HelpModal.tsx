import React from 'react';
import { X, UserPlus, ShoppingBag, Receipt, CheckCircle2, Camera } from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ zIndex: 100 }}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={onClose} />
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden flex flex-col animate-scale-up transition-colors">
        <div className="p-5 border-b border-gray-100 dark:border-slate-800 flex justify-between items-center bg-gray-50 dark:bg-slate-800 transition-colors">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">วิธีใช้งาน EasySplit</h3>
          <button onClick={onClose} className="text-gray-400 dark:text-slate-500 bg-white dark:bg-slate-700 p-1.5 rounded-full border border-gray-200 dark:border-slate-600 transition-colors">
            <X size={20} />
          </button>
        </div>
        <div className="p-6 space-y-6 overflow-y-auto max-h-[70vh]">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-xl flex items-center justify-center text-teal-600 dark:text-teal-400 shadow-sm"><UserPlus size={24} /></div>
            <div><h4 className="font-bold text-gray-900 dark:text-slate-100 mb-1">1. เพิ่มสมาชิก</h4><p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed">ใส่ชื่อเพื่อนๆ ให้ครบทุกคน</p></div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm"><Camera size={24} /></div>
            <div><h4 className="font-bold text-gray-900 dark:text-slate-100 mb-1">2. เพิ่มรายการ (หรือสแกน!)</h4><p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed">พิมพ์เองหรือสแกนด้วย AI</p></div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm"><ShoppingBag size={24} /></div>
            <div><h4 className="font-bold text-gray-900 dark:text-slate-100 mb-1">3. ระบุคนกิน</h4><p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed">เลือกเพื่อนที่หารในแต่ละรายการ</p></div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-sm"><Receipt size={24} /></div>
            <div><h4 className="font-bold text-gray-900 dark:text-slate-100 mb-1">4. สรุปยอด</h4><p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed">ดูยอดสุทธิและใครต้องโอนให้ใคร</p></div>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg border border-orange-100 dark:border-orange-900/30 flex items-start gap-2">
            <CheckCircle2 className="text-orange-500 mt-0.5" size={16} />
            <p className="text-xs text-orange-800 dark:text-orange-400"><strong>Tip:</strong> รายการไหนหารเท่ากันทุกคน กดปุ่ม All ได้เลย</p>
          </div>
        </div>
        <div className="p-4 border-t border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-800 transition-colors">
          <button onClick={onClose} className="w-full bg-teal-700 dark:bg-teal-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-teal-900/10 hover:bg-teal-800 transition-all">เข้าใจแล้ว</button>
        </div>
      </div>
    </div>
  );
};