// Başka bir dosyada kullanmak için
import { slidingWindowMedain } from "./easy/75_slidingWindowMedai.js"; // dosyaAdi.js, modül dosyanızın adıyla değiştirilmelidir.

// Test verisi
const arr = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;

// slidingWindowMedain fonksiyonunu kullanma
const result = slidingWindowMedain(arr, k);

// Sonucu yazdırma
console.log(result);
