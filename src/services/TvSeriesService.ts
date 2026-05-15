import { apiClient } from "@/api/axios"
import type { TVShow } from "@/types/series.type"
import type { PaginatedResponse } from "./MovieService"


type PaginatedTvResponse=Omit<PaginatedResponse<TVShow>,'dates'>

const getAiringTodaySeries=async():Promise<PaginatedTvResponse>=>{

const response=await apiClient.get<PaginatedTvResponse>('/tv/airing_today?language=en-US&page=1')
return response.data

}

export const tvSeriesService={
getAiringTodaySeries
}