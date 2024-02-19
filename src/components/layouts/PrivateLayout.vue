<template>
  <div class="dark:bg-secondary-900">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-50 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-secondary-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-secondary-50" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div
                class="flex grow flex-col gap-y-5 overflow-y-auto bg-primary-600 dark:bg-primary-800 px-6 pb-4"
              >
                <div class="flex h-16 shrink-0 items-center bg-secondary-50">
                  <img class="h-8 w-auto" :src="'/assets/yacast-logo-svg-vector.svg'" alt="Your Company" />
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name">
                          <a
                            :href="item.href"
                            :class="[
                              item.current
                                ? 'bg-primary-700 text-secondary-50'
                                : 'text-primary-200 hover:text-secondary-50 hover:bg-primary-700',
                              'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                            ]"
                          >
                            <!-- <component :is="item.icon"
                              :class="[item.current ? 'text-secondary-50' : 'text-primary-200 group-hover:text-secondary-50', 'h-6 w-6 shrink-0']"
                              aria-hidden="true" /> -->
                            <font-awesome-icon
                              :icon="['fad', item.icon]"
                              size="xl"
                              :class="[
                                item.current
                                  ? 'text-secondary-50'
                                  : 'text-primary-200 group-hover:text-secondary-50',
                                'h-6 w-6 shrink-0'
                              ]"
                            />
                            {{ item.name }}
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-primary-500 px-6 pb-4">
        <div class="flex shrink-0 items-center bg-secondary-200 mt-4 px-4 rounded-md shadow">
          <img class="h-16 text-center" :src="'/assets/yacast-logo-svg-vector.svg'" alt="Your Company" />
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in navigation" :key="item.name">
                  <a
                    :href="item.href"
                    :class="[
                      item.current
                        ? 'bg-primary-700 text-secondary-50'
                        : 'text-primary-200 hover:text-secondary-50 hover:bg-primary-700',
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                    ]"
                  >
                    <font-awesome-icon
                      :icon="['fad', item.icon]"
                      size="xl"
                      :class="[
                        item.current
                          ? 'text-secondary-50'
                          : 'text-primary-200 group-hover:text-secondary-50',
                        'h-6 w-6 shrink-0'
                      ]"
                    />
                    {{ item.name }}
                    <font-awesome-icon
                      v-if="item.wip"
                      :icon="['fad', 'triangle-person-digging']"
                      size="xl"
                      class="text-danger-500 text-right"
                    />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="lg:pl-72 dark:bg-secondary-900">
      <div
        class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-secondary-200 dark:border-secondary-700 bg-secondary-50 dark:bg-secondary-900 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"
      >
        <button
          type="button"
          class="-m-2.5 p-2.5 text-secondary-700 lg:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>

        <!-- Separator -->
        <div class="h-6 w-px bg-secondary-900/10 lg:hidden" aria-hidden="true" />

        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <div class="relative flex flex-1"></div>
          <div class="flex items-center gap-x-4 lg:gap-x-6">
            <button
              @click="toggleDark()"
              class="rounded bg-primary-600 p-2 text-xs font-semibold text-secondary-50 shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              <font-awesome-icon :icon="['fad', 'space-station-moon']" size="xl" />
            </button>
          </div>
        </div>
      </div>

      <main class="py-10 dark:bg-secondary-900">
        <div class="px-4 sm:px-6 lg:px-8">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot
} from '@headlessui/vue'
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { useDark, useToggle } from '@vueuse/core'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const route = useRoute()
const path = computed(() => route.path)
console.log(path.value)

const navigation = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: 'house',
    current: path.value === '/dashboard',
    wip: false
  },
  {
    name: 'Processors',
    href: '/dashboard/processors',
    icon: 'microchip',
    current: path.value === '/dashboard/processors',
    wip: false
  },
  { name: 'Configs', href: '#', icon: 'wrench', current: false, wip: true },
  {
    name: 'Buckets',
    href: '/dashboard/buckets',
    icon: 'bucket',
    current: path.value === '/dashboard/buckets',
    wip: false
  },
  {
    name: 'Catch up',
    href: '/dashboard/catch-up',
    icon: 'arrow-rotate-right',
    current: path.value === '/dashboard/catch-up',
    wip: true
  },
  {
    name: 'Backtrack',
    href: '/dashboard/backtrack',
    icon: 'backward',
    current: path.value === '/dashboard/backtrack',
    wip: true
  }
]

const sidebarOpen = ref(false)
</script>
