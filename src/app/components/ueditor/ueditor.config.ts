export class UEditorConfig{
    /**
     * 默认配置项
     */
    options?:any;
    /**
     * 指定ueditor.js路径
     */
    path?:string;
    /**
     * Hook
     */
    hook?:Function;
    // 用于标记hook是否已经注册完成
    _hook_finished?:boolean=false; 
}