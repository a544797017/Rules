/*************************************
# 个人备用
# 原脚本作者：chxm1023

**************************************

[rewrite_local]
^https?:\/\/notability\.com\/(global|subscriptions) url script-response-body https://raw.githubusercontent.com/a544797017/Rules/refs/heads/main/QuantumultX/notability.js

[mitm]
hostname = notability.com

*************************************/


var obj = JSON.parse($response.body);

obj = {
   "data" : {
     "processAppleReceipt" : {
       "error" : 0,
       "subscription" : {
         "productId" : "com.gingerlabs.Notability.premium_subscription",
         "originalTransactionId" : "570001184068302",
         "tier" : "premium",
         "refundedDate" : null,
         "refundedReason" : null,
         "isInBillingRetryPeriod" : false,
         "expirationDate" : "2099-09-09T09:09:09.000Z",
         "gracePeriodExpiresAt" : null,
         "overDeviceLimit" : false,
         "expirationIntent" : null,
         "__typename" : "AppStoreSubscription",
         "user" : null,
         "status" : "canceled",
         "originalPurchaseDate" : "2022-09-09T09:09:09.000Z"
       },
       "__typename" : "SubscriptionResult"
    }
  }
};

$done({body : JSON.stringify(obj)});
