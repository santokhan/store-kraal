<template>
    <div class="w-full text-white rounded-lg border border-white/30">
        <div class="flex justify-between items-center border-b border-white/30">
            <div class="px-4 lg:px-6 py-3 lg:py-5 space-y-1">
                <dt class="font-medium ">Amount</dt>
                <dd class="font-medium ">${{ serverData.paymentDetails.amount }}</dd>
            </div>
            <div class="px-4 lg:px-6">
                <dd v-if="serverData.paymentDetails.status.match(regex)"
                    class="px-2 py-0.5 text-xs text-green-600 font-medium border border-green-600 rounded-lg">Paid</dd>
                <dd v-else-if="serverData.paymentDetails.status === 'unpaid'"
                    class="px-2 py-0.5 text-xs text-red-600 font-medium border border-red-50 rounded-lg">Unpaid</dd>
            </div>
        </div>
        <div class="space-y-4 p-4 lg:p-6">
            <div class="flex items-center gap-3">
                <dt class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true" class="w-5 h-5 text-gray-400">
                        <path
                            d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z">
                        </path>
                        <path fill-rule="evenodd"
                            d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                            clip-rule="evenodd"></path>
                    </svg></dt>
                <dd class=" text-sm">
                    <time datetime="2023-01-31">{{ serverData.paymentDetails.paymentDate }}</time>
                </dd>
            </div>
            <div class="flex items-center gap-3">
                <dt class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true" class="w-5 h-5 text-gray-400">
                        <path fill-rule="evenodd"
                            d="M2.5 4A1.5 1.5 0 001 5.5V6h18v-.5A1.5 1.5 0 0017.5 4h-15zM19 8.5H1v6A1.5 1.5 0 002.5 16h15a1.5 1.5 0 001.5-1.5v-6zM3 13.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm4.75-.75a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z"
                            clip-rule="evenodd"></path>
                    </svg></dt>
                <dd class=" text-sm">Paid with {{ serverData.paymentDetails.cardType }}</dd>
            </div>
        </div>
        <div class="px-4 lg:px-6 py-3 lg:py-5 border-t border-white/30">
            <a href="#" class="text-sm font-medium ">Download receipt<span aria-hidden="true">→</span></a>
        </div>
    </div>
</template>

<script setup lang="ts">
const regex: RegExp = /paid/i;

const serverData = {
    paymentDetails: {
        amount: 10560.00,
        status: "Paid",
        accountHolder: 'Alex Curren',
        paymentDate: 'January 31, 2023',
        cardType: 'MasterCard',
    },
}
</script>

<style scoped></style>