import React from 'react';
import * as Components from '../../uil-bundle/bundle.js';
import useBaseUrl from "@docusaurus/core/lib/client/exports/useBaseUrl";

export default {
  useBaseUrl,
  ...Components,
  React,
  ...React,
};