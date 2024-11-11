/*
 * @Description: 
 * @Author: ldx
 * @Date: 2024-09-27 16:04:35
 * @LastEditors: ldx
 * @LastEditTime: 2024-11-11 10:02:39
 */

import { alignRatio, baselineRatio, IEventListenerId, IPointerEvent, Matrix3, OrbitEvent, Text } from "@/dxCanvas"
import { PointerEvent } from "@/dxEditor/event"
import EditTool from "../editTool/editTool"
import { updateStyle } from "./textEditInner"

export default class LineEditInner extends EditTool {

  public get tag() { return 'LineEditInner' }

  openInnerEditor() {
    
  }
 
  onUpdate = () => {
    
  }

  closeInnerEditor() {
    
  }
}

