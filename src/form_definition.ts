export type FormControl =
  | 'ApproveButton'
  | 'Checkbox'
  | 'Comment'
  | 'Date'
  | 'DateRange'
  | 'DateTime'
  | 'DeleteButton'
  | 'EditorCell'
  | 'Form'
  | 'Formula'
  | 'Image'
  | 'Input'
  | 'Modal'
  | 'Menu'
  | 'Radio'
  | 'RejectButton'
  | 'Repeater'
  | 'Search'
  | 'Select'
  | 'Signature'
  | 'SubmitButton'
  | 'Table'
  | 'Text'
  | 'Textarea'
  | 'Time'
  | 'Value';

export interface FormDefinition {
  name: string;
  description?: string;
  elements?: FormElement[];
}

export interface PropMap {
  [index: string]: string | number | PropMap;
}

export interface FormElement {
  row?: number;
  column?: number;
  width?: number;
  source?: string;
  sourceRef?: string;
  label?: string;
  renderer?: string;
  handler?: string;
  inline?: boolean;
  parent?: FormElement;
  list?: string;
  readOnly?: boolean;
  filterSource?: string;
  filterColumn?: string;
  control?: FormControl;
  controlProps?: PropMap;
  vertical?: boolean;
  elements?: FormElement[];
  url?: string;
}
