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

export interface MapServerApiModel {
  namespace?: string
  description?: string
  password?: string
  username?: string
  id?: number
  namespacePrefix?: string
  configurl?: string
  wmsurl?: string
  wfsurl?: string
  wcsurl?: string
  stylerurl?: string
  pushStyleInWorkspace_JpaWorkaround?: string
  pushStyleInWorkspace?: MapServerApiModel
  name?: string
}
