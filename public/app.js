const $=id=>document.getElementById(id);
const money=(value,currency)=>new Intl.NumberFormat("en-US",{style:"currency",currency,maximumFractionDigits:2}).format(Number(value)||0);
function update(){
 const source=$("currency").value,destination=$("dest").value||source;
 const amount=Number($("amount").value)||0,transferFee=Number($("fee").value)||0,rate=Number($("rate").value)||0;
 const ref=$("reference").value.trim()||("NST-"+Date.now());
 $("typeout").textContent=$("type").value;$("refout").textContent=ref;
 $("senderout").textContent=$("sender").value.trim()||"Sender name";
 $("beneficiaryout").textContent=$("beneficiary").value.trim()||"Beneficiary name";
 $("amountout").textContent=money(amount,source);
 $("feeout").textContent=money(transferFee,source);
 $("rateout").textContent=rate?("1 "+source+" = "+rate.toLocaleString("en-US")+" "+destination):"Not supplied";
 $("converted").textContent=rate?"Indicative conversion: "+money(amount*rate,destination):"No conversion calculated";
 $("purposeout").textContent=$("purpose").value.trim()||"—";
 $("totalout").textContent=money(amount+transferFee,source);
 $("statusout").textContent=$("status").value.toUpperCase();
 const conversionFee=Number($("conversionFee").value)||0,feeCurrency=$("feeCurrency").value;
 $("conversionAmount").textContent=money(conversionFee,feeCurrency);
 $("feePayeeOut").textContent=$("feePayee").value.trim()||"Not specified";
 $("feeInstructionsOut").textContent=$("feeInstructions").value.trim()||"Confirm directly with the named provider.";
 $("dateout").textContent="Prepared "+new Date().toLocaleString();
}
$("f").addEventListener("submit",event=>{event.preventDefault();update()});
$("f").addEventListener("input",update);$("f").addEventListener("change",update);
$("print").addEventListener("click",()=>{update();window.print()});update();