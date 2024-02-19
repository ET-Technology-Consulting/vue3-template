<template>
  <main>
    <PageTitle title="Backtrack" description="Check backtrack results" icon="backward" />
    <div class="flex space-x-2 mb-5">
    <loading-button v-if="page > 1" label="<<" :loading="dataLoading"
      @callback="() => { page = page - 1; getData() }" />
    <select id="location" name="location"
      class="mt-2 block rounded-md border-0 py-1.5 pl-3 pr-10 text-secondary-900 ring-1 ring-inset ring-secondary-300 focus:ring-2 focus:ring-primary-600 sm:text-sm sm:leading-6">
      <option :value="1">1</option>
      <option :selected="true" value="2">2</option>
      <option :value="3">3</option>
      <option :value="0">All Media IDs</option>
    </select>
    <select id="location" name="location"
      class="mt-2 block rounded-md border-0 py-1.5 pl-3 pr-10 text-secondary-900 ring-1 ring-inset ring-secondary-300 focus:ring-2 focus:ring-primary-600 sm:text-sm sm:leading-6">
      <option value="1">1</option>
      <option :selected="true" value="2">2</option>
      <option value="3">3</option>
      <option :value="0">All Bucket IDs</option>
    </select>
    <vue-tailwind-datepicker v-model="dateValue" />
    <loading-button label=">>" :loading="dataLoading" @callback="() => { page = page + 1; getData() }" />
    </div>
    <div id="chart">
      <apexchart type="rangeBar" height="500" :options="chartOptions" :series="toRaw(series)" id="vuechart-example">
      </apexchart>
    </div>
    <backtrack-details-table :data="data" :header="header" />
    <!-- <timeline :chart-options="chartOptions" :series="series"></timeline> -->
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, toRaw } from 'vue'
import { useRoute } from 'vue-router'
const dateValue = ref([]);
import { getBacktrackSearch, getTrackMetadatas } from '../api/backtrackApi'

import PageTitle from '../../../components/global/PageTitle.vue'
import LoadingButton from '@/components/global/LoadingButton.vue'
import BacktrackDetailsTable from '../components/BacktrackDetailsTable.vue'

const route = useRoute()
const search_id = route.params.id
const media_id = ref(0)
const bucket_id = ref(0)
const limit = ref(100)
const page = ref(1)
const dataLoading = ref(false)

const series = ref<any>([])
const chartOptions = ref<any>({
  chart: {
    height: 450,
    type: 'rangeBar',
    id: "vuechart-example"
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '80%'
    }
  },
  dataLabels: {
    enabled: true,
    formatter: (val: any, opts: any) => {
      const label = `${opts.w.globals.initialSeries[opts.seriesIndex].data[opts.dataPointIndex].isrc} / ${opts.w.globals.initialSeries[opts.seriesIndex].data[opts.dataPointIndex].fingerprint_id}`
      return label
    },
    style: {
      colors: ['#f3f4f5', '#fff']
    }
  },
  xaxis: {
    type: 'datetime'
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];

      return '<ul class="p-5">' +
        '<li><b>Media</b>: ' + data.media_id + '</li>' +
        '<li><b>Bucket</b>: ' + data.bucket + '</li>' +
        '<li><b>Fingerprint</b>: ' + data.fingerprint_id + '</li>' +
        '<li><b>Title</b>: ' + data.title + '</li>' +
        '<li><b>Artist</b>: ' + data.display_artist + '</li>' +
        '<li><b>ISRC</b>: ' + data.isrc + '</li>' +
        '<li><b>Start</b>: ' + data.start_date_detection + '</li>' +
        '<li><b>End</b>: ' + data.end_date_detection + '</li>' +
        '</ul>';
    }
  },
  stroke: {
    width: 1
  },
  fill: {
    type: 'solid',
    opacity: 0.6
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left'
  }
})

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const header = ['FID', 'Bucket', 'Media', 'Title', 'Artist', 'ISRC', 'Start', 'End', 'Duration']
const data = ref<any>([])

  ; (async () => {
    dataLoading.value = true
    const res = await getBacktrackSearch({ search_id, media_id: media_id.value, bucket_id: bucket_id.value, limit: limit.value, page: page.value })
    let tmpSeries = <any[]>[]
    let tmpBuckets = <string[]>[]
    let tmpMetadatas = <any>{}

    res.items.forEach(async (item: any) => {
      let metadata = await getTrackMetadatas(item.bucket_id.toString(), item.fingerprint_id)
      tmpMetadatas[item.fingerprint_id.toString()] = metadata.doc
    })

    await sleep(2000)
    console.log("tmpMetadatas", tmpMetadatas)

    res.items.forEach((item: any) => {
      if (!tmpBuckets.includes(item.bucket)) {
        tmpBuckets.push(item.bucket)
        tmpSeries[tmpBuckets.indexOf(item.bucket)] = {
          name: item.bucket,
          data: []
        }
      }
      tmpSeries[tmpBuckets.indexOf(item.bucket)].data.push({
        x: `media-${item.media_id}`,
        y: [
          new Date(item.start_date_detection).getTime(),
          new Date(item.end_date_detection).getTime(),
        ],
        fingerprint_id: item.fingerprint_id,
        bucket: `${tmpMetadatas[item?.fingerprint_id?.toString()]?.bucket_name} (${item?.bucket_id})`,
        media_id: item.media_id,
        title: tmpMetadatas[item.fingerprint_id.toString()]?.title,
        display_artist: tmpMetadatas[item.fingerprint_id.toString()]?.display_artist,
        isrc: tmpMetadatas[item.fingerprint_id.toString()]?.ISRC,
        start_date_detection: item.start_date_detection,
        end_date_detection: item.end_date_detection
      })
      data.value.push({
        fingerprint_id: item.fingerprint_id,
        bucket: `${tmpMetadatas[item?.fingerprint_id?.toString()]?.bucket_name} (${item?.bucket_id})`,
        media_id: item.media_id,
        title: tmpMetadatas[item.fingerprint_id.toString()]?.title,
        display_artist: tmpMetadatas[item.fingerprint_id.toString()]?.display_artist,
        isrc: tmpMetadatas[item.fingerprint_id.toString()]?.ISRC,
        start_date_detection: item.start_date_detection,
        end_date_detection: item.end_date_detection,
        duration: (new Date(item.end_date_detection).getTime() - new Date(item.start_date_detection).getTime()) / 1000
      })
    })
    series.value = tmpSeries
    // data.value = res
    console.log(data.value)
    dataLoading.value = false

  })()

const getData = async () => {
  dataLoading.value = true
  const res = await getBacktrackSearch({ search_id, media_id: media_id.value, bucket_id: bucket_id.value, limit: limit.value, page: page.value })
  let tmpSeries = <any[]>[]
  let tmpBuckets = <string[]>[]
  let tmpMetadatas = <any>{}

  res.items.forEach(async (item: any) => {
    let metadata = await getTrackMetadatas(item.bucket_id.toString(), item.fingerprint_id)
    console.log(item.fingerprint_id.toString(), metadata.doc)
    tmpMetadatas[item.fingerprint_id.toString()] = metadata.doc
  })

  await sleep(2000)
  console.log("tmpMetadatas", tmpMetadatas)

  res.items.forEach((item: any) => {
    if (!tmpBuckets.includes(item.bucket)) {
      tmpBuckets.push(item.bucket)
      tmpSeries[tmpBuckets.indexOf(item.bucket)] = {
        name: item.bucket,
        data: []
      }
    }
    tmpSeries[tmpBuckets.indexOf(item.bucket)].data.push({
      x: `media-${item.media_id}`,
      y: [
        new Date(item.start_date_detection).getTime(),
        new Date(item.end_date_detection).getTime(),
      ],
      fingerprint_id: item.fingerprint_id,
      bucket: `${tmpMetadatas[item?.fingerprint_id?.toString()]?.bucket_name} (${item?.bucket_id})`,
      media_id: item.media_id,
      title: tmpMetadatas[item.fingerprint_id.toString()]?.title,
      display_artist: tmpMetadatas[item.fingerprint_id.toString()]?.display_artist,
      isrc: tmpMetadatas[item.fingerprint_id.toString()]?.ISRC,
      start_date_detection: item.start_date_detection,
      end_date_detection: item.end_date_detection
    })
    data.value.push({
      fingerprint_id: item.fingerprint_id,
      bucket: `${tmpMetadatas[item?.fingerprint_id?.toString()]?.bucket_name} (${item?.bucket_id})`,
      media_id: item.media_id,
      title: tmpMetadatas[item.fingerprint_id.toString()]?.title,
      display_artist: tmpMetadatas[item.fingerprint_id.toString()]?.display_artist,
      isrc: tmpMetadatas[item.fingerprint_id.toString()]?.ISRC,
      start_date_detection: item.start_date_detection,
      end_date_detection: item.end_date_detection,
      duration: (new Date(item.end_date_detection).getTime() - new Date(item.start_date_detection).getTime()) / 1000
    })
  })
  series.value = tmpSeries
  // data.value = res
  console.log(data.value)
  dataLoading.value = false
}
</script>