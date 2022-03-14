import type { PluginListenerHandle } from '@capacitor/core';
import { registerPlugin } from '@capacitor/core';

import type {
  CameraConfig,
  GoogleMapConfig,
  MapPadding,
  MapType,
} from './definitions';
import type { Marker } from './map';

export interface CreateMapArgs {
  id: string;
  apiKey: string;
  config: GoogleMapConfig;
  element: HTMLElement;
  frame?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  forceCreate?: boolean;
}

export interface DestroyMapArgs {
  id: string;
}

export interface RemoveMarkerArgs {
  id: string;
  markerId: string;
}

export interface RemoveMarkersArgs {
  id: string;
  markerIds: string[];
}

export interface AddMarkerArgs {
  id: string;
  marker: Marker;
}

export interface CameraArgs {
  id: string;
  config: CameraConfig;
}

export interface MapTypeArgs {
  id: string;
  mapType: MapType;
}

export interface IndoorMapArgs {
  id: string;
  enabled: boolean;
}

export interface TrafficLayerArgs {
  id: string;
  enabled: boolean;
}

export interface AccElementsArgs {
  id: string;
  enabled: boolean;
}

export interface PaddingArgs {
  id: string;
  padding: MapPadding;
}

export interface CurrentLocArgs {
  id: string;
  enabled: boolean;
}
export interface AddMarkersArgs {
  id: string;
  markers: Marker[];
}

export interface OnScrollArgs {
  id: string;
  frame: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  mapBounds: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

export type MapListenerCallback = (data: any) => void;

export interface CapacitorGoogleMapsPlugin {
  create(args: CreateMapArgs): Promise<void>;
  addMarker(args: AddMarkerArgs): Promise<{ id: string }>;
  addMarkers(args: AddMarkersArgs): Promise<{ ids: string[] }>;
  removeMarker(args: RemoveMarkerArgs): Promise<void>;
  removeMarkers(args: RemoveMarkersArgs): Promise<void>;
  enableClustering(args: { id: string }): Promise<void>;
  disableClustering(args: { id: string }): Promise<void>;
  destroy(args: DestroyMapArgs): Promise<void>;
  setCamera(args: CameraArgs): Promise<void>;
  setMapType(args: MapTypeArgs): Promise<void>;
  enableIndoorMaps(args: IndoorMapArgs): Promise<void>;
  enableTrafficLayer(args: TrafficLayerArgs): Promise<void>;
  enableAccessibilityElements(args: AccElementsArgs): Promise<void>;
  enableCurrentLocation(args: CurrentLocArgs): Promise<void>;
  setPadding(args: PaddingArgs): Promise<void>;
  onScroll(args: OnScrollArgs): Promise<void>;
  // setOnCameraIdleListener(args: { callback?: MapListenerCallback }): Promise<void>;
  // setOnCameraMoveStartedListener(args: { callback?: MapListenerCallback }): Promise<void>;
  // setOnClusterClickListener(args: { callback?: MapListenerCallback }): Promise<void>;
  // setOnMapClickListener(args: { callback?: MapListenerCallback }): Promise<void>;
  // setOnMarkerClickListener(args: { callback?: MapListenerCallback }): Promise<void>;
  // setOnMyLocationButtonClickListener(args: { callback?: MapListenerCallback }): Promise<void>;
  // setOnMyLocationClickListener(args: { callback?: MapListenerCallback }): Promise<void>;

  addListener(
    eventName: 'onCameraIdle',
    listenerFunc: MapListenerCallback,
  ): PluginListenerHandle;

  addListener(
    eventName: 'onCameraMoveStarted',
    listenerFunc: MapListenerCallback,
  ): PluginListenerHandle;

  addListener(
    eventName: 'onClusterClick',
    listenerFunc: MapListenerCallback,
  ): PluginListenerHandle;

  addListener(
    eventName: 'onMapReady',
    listenerFunc: MapListenerCallback,
  ): PluginListenerHandle;

  addListener(
    eventName: 'onMapClick',
    listenerFunc: MapListenerCallback,
  ): PluginListenerHandle;

  addListener(
    eventName: 'onMarkerClick',
    listenerFunc: MapListenerCallback,
  ): PluginListenerHandle;

  addListener(
    eventName: 'onMyLocationButtonClick',
    listenerFunc: MapListenerCallback,
  ): PluginListenerHandle;

  addListener(
    eventName: 'onMyLocationClick',
    listenerFunc: MapListenerCallback,
  ): PluginListenerHandle;
}

export const CapacitorGoogleMaps = registerPlugin<CapacitorGoogleMapsPlugin>(
  'CapacitorGoogleMaps',
  {
    web: () => import('./web').then(m => new m.CapacitorGoogleMapsWeb()),
  },
);
