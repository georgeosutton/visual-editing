import {
  QueryResponseInitial,
  type QueryParams,
  type UseQueryOptionsDefinedInitial,
} from "@sanity/react-loader";
import * as queryStore from "@sanity/react-loader";
import { settingsQuery } from "../lib/queries";
import { SettingsQueryResult } from "@/typegen/sanity.fragment-types";

/**
 * Exports to be used in client-only or components that render both server and client
 */
export const useQuery = <
  QueryResponseResult = unknown,
  QueryResponseError = unknown,
>(
  query: string,
  params?: QueryParams,
  options?: UseQueryOptionsDefinedInitial<QueryResponseResult>,
) => {
  const snapshot = queryStore.useQuery<QueryResponseResult, QueryResponseError>(
    query,
    params,
    options,
  );

  // Always throw errors if there are any
  if (snapshot.error) {
    throw snapshot.error;
  }

  return snapshot;
};

export function useSettings(
  initial: QueryResponseInitial<SettingsQueryResult>,
) {
  return useQuery<SettingsQueryResult>(settingsQuery, {}, { initial });
}
