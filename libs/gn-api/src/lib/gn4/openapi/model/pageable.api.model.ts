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
import { SortApiModel } from './sort.api.model'

export interface PageableApiModel {
  sort?: SortApiModel
  paged?: boolean
  unpaged?: boolean
  pageNumber?: number
  pageSize?: number
  offset?: number
}
