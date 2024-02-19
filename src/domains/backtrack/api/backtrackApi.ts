import axios from 'axios'

export const getBacktrackSearches = async (params: any) => {
  const urlParams = new URLSearchParams(params).toString();
  const response = await axios.get(`http://localhost:10101/v1/backtrack/searches?${urlParams}`)
  return response.data
  // return [
  //   {
  //     "id": "9da864f7-df21-4a1f-b2d4-406294faa5f4",
  //     "description": "BT Search 131834 (upm normal)",
  //     "start_time": "2023-03-01T00:00:00.000Z",
  //     "end_time": "2023-03-04T00:00:00.000Z",
  //     "phs_options": "--experimental=9",
  //     "media_ids": "179331",
  //     "bucket_ids": "91"
  //   },
  //   {
  //     "id": "328b72b9-1604-45b4-9c46-ce674aef2e88",
  //     "description": "Francetv Reportages (BT #131830)",
  //     "start_time": "2022-01-01T00:00:00.000Z",
  //     "end_time": "2022-03-01T00:00:00.000Z",
  //     "phs_options": "-D -c",
  //     "media_ids": "76770,76771",
  //     "bucket_ids": "1471,1476"
  //   }
  // ]
}

export const getBacktrackSearch = async (params: any) => {
  const urlParams = new URLSearchParams(params).toString();
  const response = await axios.get(`http://localhost:10101/v1/backtrack/searches/results?${urlParams}`);
  return response.data;
  // return [
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 178553,
  //     "fingerprint_id": "12490",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T00:00:00.000Z",
  //     "end_date_detection": "2023-08-30T00:00:20.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "13159",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T00:00:07.000Z",
  //     "end_date_detection": "2023-08-30T00:00:30.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "12861",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T00:01:10.000Z",
  //     "end_date_detection": "2023-08-30T00:01:48.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "12867",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T00:01:57.000Z",
  //     "end_date_detection": "2023-08-30T00:03:27.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 163859,
  //     "fingerprint_id": "665",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T00:02:12.000Z",
  //     "end_date_detection": "2023-08-30T00:02:45.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "18290",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T00:03:46.000Z",
  //     "end_date_detection": "2023-08-30T00:04:59.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "22556",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T00:05:56.000Z",
  //     "end_date_detection": "2023-08-30T00:06:21.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "18290",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T00:06:34.000Z",
  //     "end_date_detection": "2023-08-30T00:07:39.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "2603",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T00:12:24.000Z",
  //     "end_date_detection": "2023-08-30T00:12:45.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 178553,
  //     "fingerprint_id": "29873",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T00:14:57.000Z",
  //     "end_date_detection": "2023-08-30T00:15:07.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 178553,
  //     "fingerprint_id": "29842",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T00:15:00.000Z",
  //     "end_date_detection": "2023-08-30T00:15:08.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 178553,
  //     "fingerprint_id": "16676",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T00:21:30.000Z",
  //     "end_date_detection": "2023-08-30T00:22:30.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "19498",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T00:24:44.000Z",
  //     "end_date_detection": "2023-08-30T00:25:17.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "19498",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T00:25:00.000Z",
  //     "end_date_detection": "2023-08-30T00:25:17.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "22544",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T00:30:35.000Z",
  //     "end_date_detection": "2023-08-30T00:31:13.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "22004",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T00:33:20.000Z",
  //     "end_date_detection": "2023-08-30T00:33:58.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "45464",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T00:45:54.000Z",
  //     "end_date_detection": "2023-08-30T00:46:41.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179332,
  //     "fingerprint_id": "20769",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T00:46:24.000Z",
  //     "end_date_detection": "2023-08-30T00:46:40.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "45767",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T00:46:47.000Z",
  //     "end_date_detection": "2023-08-30T00:47:41.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "32941",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T00:47:44.000Z",
  //     "end_date_detection": "2023-08-30T00:47:53.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "20040",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T00:48:00.000Z",
  //     "end_date_detection": "2023-08-30T00:48:25.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "30833",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T00:49:17.000Z",
  //     "end_date_detection": "2023-08-30T00:49:34.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "348",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T00:51:11.000Z",
  //     "end_date_detection": "2023-08-30T00:51:42.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "20311",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T00:51:43.000Z",
  //     "end_date_detection": "2023-08-30T00:52:09.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "31045",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T00:54:14.000Z",
  //     "end_date_detection": "2023-08-30T00:54:30.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "20270",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T00:54:32.000Z",
  //     "end_date_detection": "2023-08-30T00:54:46.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "16739",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T01:00:00.000Z",
  //     "end_date_detection": "2023-08-30T01:00:27.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "16739",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T01:00:00.000Z",
  //     "end_date_detection": "2023-08-30T01:00:27.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "16739",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T01:00:39.000Z",
  //     "end_date_detection": "2023-08-30T01:01:18.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "16743",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T01:01:42.000Z",
  //     "end_date_detection": "2023-08-30T01:02:06.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "2861",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T01:03:30.000Z",
  //     "end_date_detection": "2023-08-30T01:04:23.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "19429",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T01:05:49.000Z",
  //     "end_date_detection": "2023-08-30T01:06:44.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "2603",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T01:08:21.000Z",
  //     "end_date_detection": "2023-08-30T01:08:38.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "45766",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T01:12:56.000Z",
  //     "end_date_detection": "2023-08-30T01:13:18.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179327,
  //     "fingerprint_id": "20036",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T01:22:10.000Z",
  //     "end_date_detection": "2023-08-30T01:22:38.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76764,
  //     "fingerprint_id": "18611",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T01:35:47.000Z",
  //     "end_date_detection": "2023-08-30T01:36:03.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "20256",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T01:37:16.000Z",
  //     "end_date_detection": "2023-08-30T01:37:35.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76764,
  //     "fingerprint_id": "10571",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T01:37:30.000Z",
  //     "end_date_detection": "2023-08-30T01:37:40.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76764,
  //     "fingerprint_id": "30171",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T01:40:11.000Z",
  //     "end_date_detection": "2023-08-30T01:40:29.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76764,
  //     "fingerprint_id": "30171",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T01:40:11.000Z",
  //     "end_date_detection": "2023-08-30T01:40:45.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "20483",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T01:44:40.000Z",
  //     "end_date_detection": "2023-08-30T01:45:29.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "20483",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T01:45:00.000Z",
  //     "end_date_detection": "2023-08-30T01:45:58.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "742",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T01:45:58.000Z",
  //     "end_date_detection": "2023-08-30T01:46:38.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "20255",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T01:46:51.000Z",
  //     "end_date_detection": "2023-08-30T01:47:05.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "20273",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T01:47:58.000Z",
  //     "end_date_detection": "2023-08-30T01:48:23.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76778,
  //     "fingerprint_id": "30958",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T01:51:38.000Z",
  //     "end_date_detection": "2023-08-30T01:52:03.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179327,
  //     "fingerprint_id": "27753",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:15:00.000Z",
  //     "end_date_detection": "2023-08-30T02:15:34.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179327,
  //     "fingerprint_id": "7869",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:15:34.000Z",
  //     "end_date_detection": "2023-08-30T02:16:04.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179327,
  //     "fingerprint_id": "20908",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:16:27.000Z",
  //     "end_date_detection": "2023-08-30T02:18:07.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 167198,
  //     "fingerprint_id": "27669",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:16:29.000Z",
  //     "end_date_detection": "2023-08-30T02:17:06.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 167198,
  //     "fingerprint_id": "26808",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:17:17.000Z",
  //     "end_date_detection": "2023-08-30T02:17:51.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179327,
  //     "fingerprint_id": "25552",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:18:07.000Z",
  //     "end_date_detection": "2023-08-30T02:18:46.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179327,
  //     "fingerprint_id": "32790",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:18:46.000Z",
  //     "end_date_detection": "2023-08-30T02:20:03.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179327,
  //     "fingerprint_id": "33865",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:20:05.000Z",
  //     "end_date_detection": "2023-08-30T02:20:45.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179327,
  //     "fingerprint_id": "33865",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:20:05.000Z",
  //     "end_date_detection": "2023-08-30T02:20:29.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179327,
  //     "fingerprint_id": "18734",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:20:45.000Z",
  //     "end_date_detection": "2023-08-30T02:22:07.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179327,
  //     "fingerprint_id": "6277",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:22:07.000Z",
  //     "end_date_detection": "2023-08-30T02:22:24.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179327,
  //     "fingerprint_id": "34604",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:23:33.000Z",
  //     "end_date_detection": "2023-08-30T02:25:28.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179327,
  //     "fingerprint_id": "34604",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:25:00.000Z",
  //     "end_date_detection": "2023-08-30T02:25:28.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76764,
  //     "fingerprint_id": "18611",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:25:18.000Z",
  //     "end_date_detection": "2023-08-30T02:25:29.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179327,
  //     "fingerprint_id": "20564",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:25:29.000Z",
  //     "end_date_detection": "2023-08-30T02:25:54.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76764,
  //     "fingerprint_id": "18611",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:26:17.000Z",
  //     "end_date_detection": "2023-08-30T02:26:53.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179327,
  //     "fingerprint_id": "32783",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:26:30.000Z",
  //     "end_date_detection": "2023-08-30T02:27:37.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179327,
  //     "fingerprint_id": "32796",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:27:37.000Z",
  //     "end_date_detection": "2023-08-30T02:28:43.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179327,
  //     "fingerprint_id": "32784",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:28:44.000Z",
  //     "end_date_detection": "2023-08-30T02:29:59.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 167198,
  //     "fingerprint_id": "26808",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:29:58.000Z",
  //     "end_date_detection": "2023-08-30T02:30:15.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179327,
  //     "fingerprint_id": "20840",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:29:59.000Z",
  //     "end_date_detection": "2023-08-30T02:30:12.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179327,
  //     "fingerprint_id": "20840",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:30:00.000Z",
  //     "end_date_detection": "2023-08-30T02:30:12.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 167198,
  //     "fingerprint_id": "26808",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:30:00.000Z",
  //     "end_date_detection": "2023-08-30T02:30:15.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179327,
  //     "fingerprint_id": "20840",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:30:20.000Z",
  //     "end_date_detection": "2023-08-30T02:30:26.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179327,
  //     "fingerprint_id": "20840",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:30:20.000Z",
  //     "end_date_detection": "2023-08-30T02:30:26.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179327,
  //     "fingerprint_id": "25585",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:30:32.000Z",
  //     "end_date_detection": "2023-08-30T02:31:39.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179327,
  //     "fingerprint_id": "25557",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:31:40.000Z",
  //     "end_date_detection": "2023-08-30T02:32:42.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179327,
  //     "fingerprint_id": "22538",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:33:22.000Z",
  //     "end_date_detection": "2023-08-30T02:33:51.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179327,
  //     "fingerprint_id": "15838",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:33:53.000Z",
  //     "end_date_detection": "2023-08-30T02:34:28.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179327,
  //     "fingerprint_id": "20641",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:34:28.000Z",
  //     "end_date_detection": "2023-08-30T02:35:29.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76771,
  //     "fingerprint_id": "52204",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:38:05.000Z",
  //     "end_date_detection": "2023-08-30T02:38:15.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76771,
  //     "fingerprint_id": "52204",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:38:05.000Z",
  //     "end_date_detection": "2023-08-30T02:38:15.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76771,
  //     "fingerprint_id": "45184",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:38:15.000Z",
  //     "end_date_detection": "2023-08-30T02:38:40.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76771,
  //     "fingerprint_id": "45184",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:38:15.000Z",
  //     "end_date_detection": "2023-08-30T02:38:40.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76772,
  //     "fingerprint_id": "33967",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:43:44.000Z",
  //     "end_date_detection": "2023-08-30T02:43:48.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76772,
  //     "fingerprint_id": "19169",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:44:26.000Z",
  //     "end_date_detection": "2023-08-30T02:44:38.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 181548,
  //     "fingerprint_id": "30628",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:52:48.000Z",
  //     "end_date_detection": "2023-08-30T02:53:06.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 175785,
  //     "fingerprint_id": "30628",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:52:54.000Z",
  //     "end_date_detection": "2023-08-30T02:53:12.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 175785,
  //     "fingerprint_id": "49339",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:53:25.000Z",
  //     "end_date_detection": "2023-08-30T02:53:52.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179327,
  //     "fingerprint_id": "21385",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:55:00.000Z",
  //     "end_date_detection": "2023-08-30T02:55:44.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179327,
  //     "fingerprint_id": "33878",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:55:45.000Z",
  //     "end_date_detection": "2023-08-30T02:56:38.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179327,
  //     "fingerprint_id": "21378",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:56:38.000Z",
  //     "end_date_detection": "2023-08-30T02:57:30.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179327,
  //     "fingerprint_id": "22458",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:57:30.000Z",
  //     "end_date_detection": "2023-08-30T02:58:26.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179327,
  //     "fingerprint_id": "22427",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T02:58:26.000Z",
  //     "end_date_detection": "2023-08-30T02:58:51.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179327,
  //     "fingerprint_id": "22556",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T03:00:01.000Z",
  //     "end_date_detection": "2023-08-30T03:00:29.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76783,
  //     "fingerprint_id": "3155",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T03:02:35.000Z",
  //     "end_date_detection": "2023-08-30T03:02:53.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76764,
  //     "fingerprint_id": "24843",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T03:06:20.000Z",
  //     "end_date_detection": "2023-08-30T03:06:50.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76764,
  //     "fingerprint_id": "24843",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T03:07:11.000Z",
  //     "end_date_detection": "2023-08-30T03:07:25.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76764,
  //     "fingerprint_id": "22721",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T03:07:51.000Z",
  //     "end_date_detection": "2023-08-30T03:08:13.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76764,
  //     "fingerprint_id": "22721",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T03:08:27.000Z",
  //     "end_date_detection": "2023-08-30T03:08:34.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76764,
  //     "fingerprint_id": "22721",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T03:08:42.000Z",
  //     "end_date_detection": "2023-08-30T03:08:51.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179327,
  //     "fingerprint_id": "19597",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T03:10:03.000Z",
  //     "end_date_detection": "2023-08-30T03:11:28.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 179327,
  //     "fingerprint_id": "19223",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T03:11:29.000Z",
  //     "end_date_detection": "2023-08-30T03:12:23.000Z"
  //   },
  //   {
  //     "id": "74e91a3e-f562-44a2-97b3-b82478cfc654",
  //     "media_id": 76773,
  //     "fingerprint_id": "14968",
  //     "bucket_id": 8,
  //     "bucket": "cip_db_cezame",
  //     "start_date_detection": "2023-08-30T03:13:19.000Z",
  //     "end_date_detection": "2023-08-30T03:14:32.000Z"
  //   }
  // ]
}

export const getTrackMetadatas = async (bucket_id: string, fingerprint_id: string) => {
  const response = await axios.get(`http://192.168.30.110:10006/music_metadata/get/title/${bucket_id}/${fingerprint_id}`)
  return response.data
}