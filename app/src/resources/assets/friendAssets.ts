// STUB: the public whitelabelled resources repo predates the custom avatar feature.
// Every getter returns null, which the app already handles (falls back / hides the item).
// Replace with real assets (see docs/custom-avatar-update/avatar-assets/adding-new-assets.md).
import type { ComponentType } from 'react'

export type BodySize = 'small' | 'medium' | 'large'
type Svg = ComponentType<any> | null

export const getPreviewAsset = (_category: string, _id?: string | null, _size?: BodySize): Svg => null
export const getSelectionAsset = (..._args: any[]): Svg => null
export const getCategoryIcon = (..._args: any[]): Svg => null
export const getThemeSvg = (_theme: string): Svg => null
export const getStandardAvatarSvg = (_avatar: string): Svg => null
