/**
 * GeoNetwork 4.0.3 OpenAPI Documentation
 * This is the description of the GeoNetwork OpenAPI. Use this API to manage your catalog.
 *
 * The version of the OpenAPI document: 4.0.3
 * Contact: geonetwork-users@lists.sourceforge.net
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ExternalResourceManagementPropertiesApiModel } from './externalResourceManagementProperties.api.model'

export interface MetadataResourceApiModel {
  version?: string
  filename?: string
  url?: string
  metadataUuid?: string
  metadataId?: number
  approved?: boolean
  visibility?: MetadataResourceApiModel.VisibilityEnum
  externalResourceManagementProperties?: ExternalResourceManagementPropertiesApiModel
  lastModification?: string
  id?: string
  size?: number
}
export namespace MetadataResourceApiModel {
  export type VisibilityEnum = 'public' | 'private'
  export const VisibilityEnum = {
    Public: 'public' as VisibilityEnum,
    Private: 'private' as VisibilityEnum,
  }
}
