<template>
	<DBLayout>
		<div class="px-4 sm:px-12 py-6 text-gray-100">
			<div class="max-w-5xl mx-auto space-y-4">
				<h1 class="text-2xl font-semibold">Billing Information</h1>

				<BillCard>
					<BillCardTitle>Billed To</BillCardTitle>
					<hr class="border-chatgpt-500">
					<BillContent>
						<BillCardSubtitle>MasterCard card ending in 4425</BillCardSubtitle>
						<div class="flex gap-4">
							<BillCardButton>Remove credit card</BillCardButton>
							<BillCardButton>Change credit card</BillCardButton>
						</div>
					</BillContent>
				</BillCard>

				<BillCard>
					<BillCardTitle>Plan Usage</BillCardTitle>
					<hr class="border-chatgpt-500">
					<BillContent>
						<table class="w-full">
							<tbody>
								<tr>
									<td class="border-none w-1/2">
										<BillCardSubtitle>Current Usage:</BillCardSubtitle>
									</td>
									<td class="border-none w-1/2">
										<BillCardSubtitle>$4.97</BillCardSubtitle>
									</td>
								</tr>
								<tr>
									<td class="border-none ">
										<BillCardSubtitle>Platform Credits:</BillCardSubtitle>
									</td>
									<td class="border-none ">
										<BillCardSubtitle>$0.00</BillCardSubtitle>
									</td>
								</tr>
							</tbody>
						</table>
						<BillCardButton @click="isOpen = !isOpen">Update Plan</BillCardButton>
					</BillContent>
				</BillCard>

				<BillCard>
					<BillCardTitle>Invoices</BillCardTitle>
					<hr class="border-chatgpt-500">
					<table class="w-full">
						<tbody>
							<tr v-for="(invoice, index) in invoices" :key="index">
								<td class="w-1/3 py-2 border-none">
									<button type="button" class="underline" @click="() => { openInvoiceModal(invoice) }">{{
										invoice.month }}</button>
								</td>
								<td class="w-1/3 py-2 border-none">
									<BillCardSubtitle>{{ invoice.amount }}</BillCardSubtitle>
								</td>
								<td class="w-1/3 py-2 border-none">
									<BillCardSubtitle>{{ invoice.status }}</BillCardSubtitle>
								</td>
							</tr>
						</tbody>
					</table>
				</BillCard>

				<TransitionRoot appear :show="isOpen" as="template">
					<Dialog as="div" @close="closeModal" class="relative z-10">
						<div class="fixed inset-0 overflow-y-auto">
							<div class="flex min-h-full items-center justify-center p-4 text-center">
								<TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
									enter-to="opacity-100 scale-100" leave="duration-200 ease-in"
									leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
									<DialogPanel
										class="w-full max-w-md transform overflow-hidden+ rounded-lg bg-chatgpt-500 p-6 text-left align-middle shadow-xl transition-all space-y-4">
										<DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-100">
											Update Plan
										</DialogTitle>
										<div class="w-full">
											<Listbox v-model="selectedPerson">
												<div class="relative mt-1">
													<ListboxButton
														class="relative w-full cursor-default rounded bg-chatgpt-400 text-gray-100 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
														<span class="block truncate">{{ selectedPerson.name }}</span>
														<span
															class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
															<ChevronUpDownIcon class="h-5 w-5 text-gray-400"
																aria-hidden="true" />
														</span>
													</ListboxButton>

													<transition leave-active-class="transition duration-100 ease-in"
														leave-from-class="opacity-100" leave-to-class="opacity-0">
														<ListboxOptions
															class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-chatgpt-400 text-gray-100 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
															<ListboxOption v-slot="{ active, selected }"
																v-for="person in people" :key="person.name" :value="person"
																as="template">
																<li :class="[
																	active ? 'bg-blue-100 text-blue-900' : 'text-gray-100',
																	'relative cursor-default select-none py-2 pl-10 pr-4',
																]">
																	<span
																		:class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">{{
																			person.name }}</span>
																</li>
															</ListboxOption>
														</ListboxOptions>
													</transition>
												</div>
											</Listbox>
										</div>

										<div class="flex justify-end mt-4">
											<button
												class="px-4 py-2 mr-2 text-gray-800 bg-gray-200 rounded hover:bg-gray-200"
												@click="isOpen = !isOpen">Close</button>
											<button class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
												@click="isOpen = !isOpen">Save changes</button>
										</div>
									</DialogPanel>
								</TransitionChild>
							</div>
						</div>
					</Dialog>
				</TransitionRoot>

				<!-- Plan Update Modal -->
				<div v-if="showPlanModal" class="fixed z-50 inset-0 flex items-center justify-center overflow-y-auto">
					<div class="modal-overlay absolute inset-0 bg-gray-500 opacity-75"></div>
					<div
						class="modal-container bg-chatgpt-500 w-full max-w-lg mx-auto rounded shadow-lg z-50 overflow-y-auto">
						<div class="modal-content py-4 text-left px-6">
							<div class="flex justify-between items-center pb-3">
								<h5 class="text-xl font-semibold">Update Plan</h5>
								<button class="close-modal" @click="closePlanModal">&times;</button>
							</div>
							<div class="modal-body">
								<select v-model="selectedPlan"
									class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-chatgpt-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
									<option v-for="plan in plans" :key="plan" :value="plan">{{ plan }}</option>
								</select>
							</div>
							<div class="flex justify-end pt-2">
								<button class="px-4 py-2 mr-2 text-gray-800 bg-gray-200 rounded hover:bg-gray-200"
									@click="closePlanModal">Close</button>
								<button class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
									@click="updatePlan">Save changes</button>
							</div>
						</div>
					</div>
				</div>

				<!-- Invoice Details Modal -->
				<div v-if="showInvoiceModal" class="fixed z-50 inset-0 flex items-center justify-center overflow-y-auto">
					<div class="modal-overlay absolute inset-0 bg-gray-500 opacity-75"></div>
					<div
						class="modal-container bg-chatgpt-500 w-full max-w-lg mx-auto rounded shadow-lg z-50 overflow-y-auto">
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
								<button class="px-4 py-2 mr-2 text-gray-800 bg-gray-200 rounded hover:bg-gray-200"
									@click="closeInvoiceModal">Close</button>
								<button class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Print
									Invoice</button>
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
import BillCard from "../blocks/billing/BillCard.vue";
import BillCardTitle from "../blocks/billing/BillCardTitle.vue";
import BillCardSubtitle from "../blocks/billing/BillCardSubTitle.vue";
import BillCardButton from "../blocks/billing/BillCardButton.vue";
import BillContent from "../blocks/billing/BillContent.vue";
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";

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

const isOpen = ref(false);

function closeModal() {
	isOpen.value = !isOpen.value;
}

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

import {
	Listbox,
	ListboxLabel,
	ListboxButton,
	ListboxOptions,
	ListboxOption,
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

const people = [
	{ name: 'Starter' },
	{ name: 'Pro' },
	{ name: 'Enterprise' },
]
const selectedPerson = ref(people[0])
</script>
