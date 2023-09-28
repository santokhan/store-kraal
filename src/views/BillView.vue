<template>
  <DBLayout>
    <div class="px-4 sm:px-12 py-6">
      <div class="max-w-5xl mx-auto space-y-8">
        <!-- Page Header -->
        <div class="">
          <h1 class="text-3xl font-semibold">Billing Information</h1>
        </div>
        <!-- Billed To -->
        <div class="bg-white rounded-lg shadow p-6 border border-gray-200">
          <div class="border-b border-gray-200 pb-2 mb-4">
            <h2 class="text-2xl font-semibold">Billed To</h2>
          </div>
          <p class="mt-4">MasterCard card ending in 4425</p>
          <div class="mt-4 flex flex-col lg:flex-row gap-2 items-start">
            <button class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Remove credit card</button>
            <button class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Change credit card</button>
          </div>
        </div>
        <!-- Plan Usage -->
        <div class="bg-white rounded-lg shadow p-6 border border-gray-200 mt-4">
          <div class="border-b border-gray-200 pb-2 mb-4">
            <h2 class="text-2xl font-semibold">Plan Usage</h2>
          </div>
          <div class="mt-4 grid grid-cols-3">
            <p>Current Usage:</p>
            <p class="justify-self-center">$4.97</p>
            <p></p>
          </div>
          <div class="mt-2 grid grid-cols-3">
            <p>Platform Credits:</p>
            <p class="justify-self-center">$0.00</p>
            <p></p>
          </div>
          <button class="mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600" @click="openPlanModal">Update
            Plan</button>
        </div>
        <!-- Invoices -->
        <div class="bg-white rounded-lg shadow p-6 border border-gray-200 mt-4">
          <div class="border-b border-gray-200 pb-2 mb-4">
            <h2 class="text-2xl font-semibold">Invoices</h2>
          </div>
          <div class="mt-4 space-y-4">
            <div v-for="(invoice, index) in invoices" :key="index" class="grid grid-cols-3 items-center">
              <a href="#" class="text-blue-600 underline hover:text-blue-800"
                @click.prevent="openInvoiceModal(invoice)">{{ invoice.month }}</a>
              <p class="justify-self-center">${{ invoice.amount }}</p>
              <p>{{ invoice.status }}</p>
            </div>
          </div>
        </div>
        <!-- Plan Update Modal -->
        <div v-if="showPlanModal" class="fixed z-50 inset-0 flex items-center justify-center overflow-y-auto">
          <div class="modal-overlay absolute inset-0 bg-gray-500 opacity-75"></div>
          <div class="modal-container bg-white w-full max-w-lg mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div class="modal-content py-4 text-left px-6">
              <div class="flex justify-between items-center pb-3">
                <h5 class="text-xl font-semibold">Update Plan</h5>
                <button class="close-modal" @click="closePlanModal">&times;</button>
              </div>
              <div class="modal-body">
                <select v-model="selectedPlan"
                  class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option v-for="plan in plans" :key="plan" :value="plan">{{ plan }}</option>
                </select>
              </div>
              <div class="flex justify-end pt-2">
                <button class="px-4 py-2 mr-2 text-gray-600 rounded hover:bg-gray-200"
                  @click="closePlanModal">Close</button>
                <button class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600" @click="updatePlan">Save
                  changes</button>
              </div>
            </div>
          </div>
        </div>
        <!-- Invoice Details Modal -->
        <div v-if="showInvoiceModal" class="fixed z-50 inset-0 flex items-center justify-center overflow-y-auto">
          <div class="modal-overlay absolute inset-0 bg-gray-500 opacity-75"></div>
          <div class="modal-container bg-white w-full max-w-lg mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div class="modal-content py-4 text-left px-6">
              <div class="flex justify-between items-center pb-3">
                <h5 class="text-xl font-semibold">Invoice Details</h5>
                <button class="close-modal" @click="closeInvoiceModal">&times;</button>
              </div>
              <div class="modal-body">
                <h2 class="text-lg font-semibold">Invoice</h2>
                <p>Month: {{ selectedInvoice.month }}</p>
                <p>Amount: ${{ selectedInvoice.amount }}</p>
                <p>Status: {{ selectedInvoice.status }}</p>
              </div>
              <div class="flex justify-end pt-2">
                <button class="px-4 py-2 mr-2 text-gray-600 rounded hover:bg-gray-200"
                  @click="closeInvoiceModal">Close</button>
                <button class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Print Invoice</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DBLayout>
</template>

<script lang="ts" setup>
import DBLayout from "../components/shared/dashboard-layout/DBLayout.vue";
import { useRoute } from 'vue-router'
import { reactive, ref } from 'vue'

interface Invoice {
  month: string;
  amount: number;
  status: string;
}

const route = useRoute();
const path = route.path;

const showPlanModal = ref(false)
const showInvoiceModal = ref(false)
const selectedPlan = ref('')
const selectedInvoice = ref<Invoice>({ month: "", amount: 0, status: "" })
const plans = reactive(['Starter', 'Pro', 'Enterprise'])
const invoices = reactive<Invoice[]>([
  { month: 'May 2023', amount: 5.31, status: 'Paid' },
  { month: 'Apr 2023', amount: 4.97, status: 'Paid' },
  { month: 'Mar 2023', amount: 4.97, status: 'Paid' },
  { month: 'Feb 2023', amount: 4.97, status: 'Paid' },
  { month: 'Jan 2023', amount: 5.31, status: 'Paid' }
])

function openPlanModal() {
  showPlanModal.value = true;
}
function closePlanModal() {
  showPlanModal.value = false;
}
function updatePlan() {
  // logic to update plan
  closePlanModal();
}
function openInvoiceModal(invoice: Invoice) {
  selectedInvoice.value = invoice;
  showInvoiceModal.value = true;
}
function closeInvoiceModal() {
  showInvoiceModal.value = false;
}
</script>

<!-- <script lang="ts">
interface Invoice {
  month: string;
  amount: number;
  status: string;
}

import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      showPlanModal: false,
      showInvoiceModal: false,
      selectedPlan: '',
      selectedInvoice: {} as Invoice,
      plans: ['Starter', 'Pro', 'Enterprise'],
      invoices: [
        { month: 'May 2023', amount: 5.31, status: 'Paid' },
        { month: 'Apr 2023', amount: 4.97, status: 'Paid' },
        { month: 'Mar 2023', amount: 4.97, status: 'Paid' },
        { month: 'Feb 2023', amount: 4.97, status: 'Paid' },
        { month: 'Jan 2023', amount: 5.31, status: 'Paid' }
      ] as Invoice[],
    };
  },
  methods: {
    openPlanModal() {
      this.showPlanModal = true;
    },
    closePlanModal() {
      this.showPlanModal = false;
    },
    updatePlan() {
      // logic to update plan
      this.closePlanModal();
    },
    openInvoiceModal(invoice: Invoice) {
      this.selectedInvoice = invoice;
      this.showInvoiceModal = true;
    },
    closeInvoiceModal() {
      this.showInvoiceModal = false;
    },
  },
});
</script> -->