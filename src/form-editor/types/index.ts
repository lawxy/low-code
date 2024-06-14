export * from './event'
export * from './service'
import { CustomEvents } from './event';
export type TConstructor<T = object> = new (...args: any[]) => T;
export interface IDragElementProp {
  type: string;
  render: React.FC<any>;
  setting: React.FC<any>;
  text: string;
  initialData: Record<string, any>;
}

export type TDirection = 'vertical' | 'horizontal';
export type TMode = 'design' | 'form';
export type TOption = { label: string; value: string | number; id?: string };
export enum EEventsType {
  CLICK,
  DOUBLE_CLICK,
  VALUE_CHANGE,
  FOCUS,
  BLUR
}

export interface IEditorCanvasProp {
  /**
   * 表单模式
   */
  mode: TMode;
  /**
   * 表单操作按钮
   */
  actions?: React.ReactNode; // 表单操作按钮组
  /**
   * 虚拟拖拽的组件
   */
  virtualElement?: IBaseElement;
}

export interface IBaseElement {
  /**
   * 链表形式存储父节点, 暂时没用
   */
  parentEelemnt?: IBaseElement;
  /**
   * 元素类型
   */
  type?: string;
  /**
   * 元素名称
   */
  elementName?: string;
  /**
   * 元素id
   */
  id?: string;
  /**
   * 元素栅格
   */
  gridSpan?: number;
  /**
   * 元素偏移
  */
  gridOffset?: number;
  /**
   * 日期元素格式
   */
  dateFormat?: string;
  /**
   * 文本类型
   */
  textType?: 'single' | 'multiple';
  /**
   * placeholder
  */
  placeholder?: string;
  /**
   * 自定义css
  */
  customCss?: string;
  /**
   * 最小行数
   */
  minRows?: number;
  /**
   * 最大行数
   */
  maxRows?: number;
  /**
   * 自适应行数
  */
  autoSize?: boolean;
  /**
   * 元素名称（标签名称）对齐方式
   */
  elementNameDisplay?: TDirection;
  /**
   * 数据类型
   */
  valueType?: 'int' | 'one_decimal' | 'two_decimal';
  /**
   * 选项
   */
  valueOptions?: TOption[];
  /**
   * 选项排列方式
   */
  alignDirection?: TDirection;
  /**
   * 表格设置
  */
  tableAttributes?: string;
  /**
   * 表格column
   */
  tableColumns?: string;
  /**
   * 事件
  */
  customEvents?: CustomEvents;
}

export interface IFormAttributesProps {
  isProcessForm: boolean;
  formName?: string;
  formId?: string;
  status?: boolean;
  horizontalGap: number;
  verticalGap: number;
}
