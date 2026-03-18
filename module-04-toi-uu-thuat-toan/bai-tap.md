# 📝 Module 4: Bài tập — Tối ưu thuật toán TikTok

> **Bloom Level:** Analyze + Evaluate
> **Mục tiêu:** Phân tích analytics video đã đăng ở Module 3, đánh giá hiệu suất, và đề xuất chiến lược cải thiện.
> **Thời lượng:** ~60 phút
> **Yêu cầu:** Đã có ít nhất 1 video đăng trên TikTok từ [Module 3 — Bài tập](../module-03-quy-trinh-san-xuat/bai-tap.md)

---

## Bài tập 1: Phân tích Hook video của bạn (20 phút)

### Mục tiêu
Đánh giá chất lượng Hook của video bạn đã tạo ở Module 3 bằng **Checklist 5 tiêu chí** (xem [bài học, Section 4.3](bai-hoc.md#43-đánh-giá-hook-checklist-5-tiêu-chí)).

### Yêu cầu

**Phần A — Tự đánh giá Hook video của bạn:**

Mở video bạn đã đăng ở Module 3 → xem lại 3 giây đầu tiên → chấm điểm:

| Tiêu chí | Câu hỏi | Điểm (0–2) | Ghi chú |
|----------|---------|-------------|---------|
| Dừng scroll | Hook có yếu tố gì khiến ngón tay dừng lại? | ___ | |
| Liên quan | Đối tượng mục tiêu có thấy mình trong hook? | ___ | |
| Tò mò | Có tạo khoảng trống tò mò → muốn xem tiếp? | ___ | |
| Rõ ràng | Trong 3 giây, có hiểu video nói về gì? | ___ | |
| Sản phẩm | Sản phẩm có xuất hiện hoặc được gợi ý? | ___ | |
| **Tổng** | | **___/10** | |

**Phần B — Đề xuất cải thiện:**

Dựa trên kết quả chấm điểm, trả lời:

1. Hook hiện tại thuộc **kiểu nào** trong 5 kiểu hook (Vấn đề→GP, Before/After, Câu hỏi, Wow moment, POV)?
2. Nếu điểm < 8, bạn sẽ **đổi sang kiểu hook nào?** Tại sao?
3. Viết **prompt Veo 3.1 mới** (theo công thức SHARP — xem [Module 2](../module-02-prompt-mastery/bai-hoc.md#2-công-thức-sharp--framework-viết-prompt)) cho hook cải thiện.

### Ví dụ output

```
📋 ĐÁNH GIÁ HOOK — Robot hút bụi

Điểm: 7/10
- Dừng scroll: 2/2 (sàn bẩn + chuyển động)
- Liên quan: 2/2 (nuôi thú cưng = phổ biến)
- Tò mò: 1/2 (thiếu text gây tò mò)
- Rõ ràng: 1/2 (chưa rõ đây là sản phẩm gì)
- Sản phẩm: 1/2 (robot chỉ thoáng qua)

Đề xuất: Đổi sang kiểu "Câu hỏi + Vấn đề→GP"
Text overlay mới: "200K cho cái này thay bạn lau nhà mỗi ngày?"
→ Tăng tò mò (giá rẻ + tính năng) + Rõ sản phẩm hơn

Prompt SHARP mới:
S: Phòng khách căn hộ, sàn gỗ bẩn đầy lông mèo trắng
H: Robot hút bụi trắng tròn nằm sẵn ở góc phòng
A: Cận cảnh tay bấm nút trên app điện thoại → robot
   bật đèn xanh, lướt ra giữa phòng, bắt đầu hút bụi
R: Vệt sạch rõ ràng trên sàn nơi robot đi qua
P: Mèo trắng nhìn robot tò mò từ trên sofa
```

---

## Bài tập 2: Đọc và phân tích TikTok Analytics (20 phút)

### Mục tiêu
Đọc analytics thực tế của video đã đăng, phân tích điểm mạnh/yếu, và đề xuất cải thiện.

### Yêu cầu

**Phần A — Thu thập số liệu:**

Mở TikTok → Analytics → chọn video đã đăng ở Module 3 → điền bảng:

| Metric | Giá trị của bạn | Benchmark | Đánh giá (🟢/🟡/🔴) |
|--------|-----------------|-----------|---------------------|
| Views (24h đầu) | ___ | > 500 | |
| Average Watch Time | ___s / ___s tổng | > 50% video | |
| Completion Rate | ___% | > 40% | |
| Like Rate | ___% | > 4% | |
| Comment Rate | ___% | > 0.5% | |
| Share Rate | ___% | > 0.3% | |
| Traffic Source: FYP | ___% | > 60% | |
| Click Rate (giỏ hàng) | ___% | > 2% | |

> 💡 **Nếu video chưa đủ 24h**, hãy đợi đủ 24h rồi quay lại đo. Analytics cần thời gian để phản ánh chính xác.

> 💡 **Nếu chưa có analytics** (chưa chuyển Business Account), hãy chuyển ngay theo hướng dẫn [bài học, Section 5.1](bai-hoc.md#51-truy-cập-tiktok-analytics), rồi đợi 24–48h để có data.

**Phần B — Phân tích bằng ma trận CR × Click Rate:**

Dựa vào Completion Rate và Click Rate, xác định video của bạn thuộc **tình huống nào** trong ma trận (xem [bài học, Section 7.4](bai-hoc.md#74-ma-trận-đánh-giá-chiến-lược)):

| Tình huống | Hành động |
|-----------|-----------|
| 🟢🟢 CR cao + Click cao | → Giữ format, tăng tần suất |
| 🟢🔴 CR cao + Click thấp | → CTA yếu, cần đổi CTA |
| 🔴🟢 CR thấp + Click cao | → Hook yếu, cần đổi hook |
| 🔴🔴 CR thấp + Click thấp | → Cần thay đổi toàn diện |

Trả lời:
1. Video của bạn thuộc tình huống nào?
2. Dựa vào ma trận, hành động tiếp theo là gì?
3. Cụ thể bạn sẽ thay đổi **yếu tố gì** và **như thế nào**?

**Phần C — Đọc biểu đồ Retention (nếu có):**

Nếu TikTok Analytics hiển thị biểu đồ Audience Retention:
1. Điểm drop-off lớn nhất ở giây thứ mấy?
2. Drop-off xảy ra ở phần nào của cấu trúc HDRCA (xem [Module 3, Section 8.1](../module-03-quy-trinh-san-xuat/bai-hoc.md#81-cấu-trúc-hdrca--5-phần-của-video-affiliate-thành-công))?
3. Đề xuất cách khắc phục.

### Ví dụ output

```
📊 PHÂN TÍCH ANALYTICS — Robot hút bụi (30s)

─── Phần A: Thu thập ───
Views (24h): 1.200     → 🟢 > 500
Avg Watch: 14s/30s     → 🟡 47% (gần 50%)
Completion Rate: 35%   → 🟡 Gần benchmark 40%
Like Rate: 3.8%        → 🟡 Gần benchmark 4%
Comment Rate: 0.2%     → 🔴 Dưới benchmark
Share Rate: 0.5%       → 🟢 Trên benchmark
FYP Traffic: 72%       → 🟢 Trên benchmark
Click Rate: 0.9%       → 🔴 Dưới benchmark

─── Phần B: Ma trận ───
Tình huống: 🔴🔴 CR thấp (35%) + Click thấp (0.9%)
→ Cần thay đổi: Hook (tăng CR) + CTA (tăng Click)

Kế hoạch:
1. Hook: Đổi từ "sàn bẩn" sang "Before/After split screen"
2. CTA: Thêm text "🛒 Giá chỉ 2xx ↓ giỏ hàng" + flash animation
3. Comment: Thêm câu hỏi "Nhà bạn dùng robot chưa?"

─── Phần C: Retention ───
Drop-off lớn nhất: Giây 4–6 (sau hook)
→ Phần Demo 1 chưa đủ hấp dẫn
→ Giải pháp: Thêm pattern interrupt ở giây 5
   (text overlay bất ngờ hoặc zoom effect)
```

---

## Bài tập 3: Thiết kế kế hoạch A/B Testing (20 phút)

### Mục tiêu
Lập kế hoạch A/B Testing cho 2 tuần tới dựa trên kết quả phân tích ở Bài tập 2.

### Yêu cầu

**Phần A — Xác định ưu tiên test:**

Dựa vào phân tích ở Bài tập 2, xếp hạng **3 yếu tố cần test** theo mức độ ưu tiên:

| Ưu tiên | Yếu tố cần test | Lý do | Credits cần |
|---------|-----------------|-------|-------------|
| 1 (cao nhất) | ___ | ___ | ___ |
| 2 | ___ | ___ | ___ |
| 3 | ___ | ___ | ___ |

💡 Nhớ: Ưu tiên test yếu tố **không tốn credits** trước (nhạc, giờ đăng, caption), sau đó mới test hook/CTA (xem [bài học, Section 6.5](bai-hoc.md#65-đánh-giá-chi-phí-ab-testing-với-google-flow)).

**Phần B — Lập kế hoạch 2 tuần:**

Điền bảng kế hoạch A/B Testing:

| Tuần | Test # | Biến số test | Video A (Control) | Video B (Variant) | Credits cần | Metric theo dõi |
|------|--------|-------------|-------------------|-------------------|-------------|-----------------|
| 1 | Test 1 | ___ | ___ | ___ | ___ | ___ |
| 1 | Test 2 | ___ | ___ | ___ | ___ | ___ |
| 2 | Test 3 | ___ | ___ | ___ | ___ | ___ |
| 2 | Test 4 | ___ | ___ | ___ | ___ | ___ |

**Phần C — Tính toán ngân sách credits:**

| Hạng mục | Số lượng | Credits/đơn vị | Tổng credits |
|----------|---------|---------------|-------------|
| Video control (giữ nguyên) | ___ | 0 | 0 |
| Video variant — hook mới | ___ | ~200 | ___ |
| Video variant — CTA mới | ___ | ~50 | ___ |
| Video variant — chỉ đổi nhạc/giờ | ___ | 0 | 0 |
| Buffer (retry) | | | ~200 |
| **Tổng** | | | **___** |

Trả lời: Tổng credits cần có phù hợp với gói đăng ký của bạn không? Nếu không, bạn sẽ cắt test nào?

**Phần D — Dự đoán kết quả:**

Cho mỗi test, dự đoán:
1. Phiên bản nào sẽ thắng? Tại sao?
2. Metric nào sẽ thay đổi nhiều nhất?
3. Mức cải thiện dự kiến bao nhiêu %?

> ⚠️ **Lưu ý:** Dự đoán là để so sánh với kết quả thực tế sau 2 tuần. Không có đúng/sai — quan trọng là quá trình **đánh giá → test → học hỏi**.

### Ví dụ output

```
📋 KẾ HOẠCH A/B TESTING — 2 tuần (Gói Pro: 1.000 credits)

─── Ưu tiên ───
1. Giờ đăng (0 credits) — Chưa biết giờ nào tốt nhất
2. Hook (200 credits) — CR hiện tại 35%, cần tăng
3. CTA (50 credits) — Click rate 0.9%, cần tăng

─── Kế hoạch ───
Tuần 1:
  Test 1: Giờ đăng → 12h trưa vs 20h tối (0 credits)
  Test 2: Nhạc → EDM trending vs Acoustic (0 credits)

Tuần 2:
  Test 3: Hook → Vấn đề→GP vs Before/After (200 credits)
  Test 4: CTA → "Link giỏ hàng" vs "Comment muốn" (50 credits)

─── Ngân sách ───
Tổng: 250 credits (test) + 200 (buffer) = 450 credits
→ Phù hợp gói Pro (1.000 credits)
→ Còn 550 credits cho 1 video mới hoàn chỉnh

─── Dự đoán ───
Test 1: 20h tối sẽ thắng (nhiều người online hơn)
  → Views +30–50%
Test 3: Before/After sẽ thắng (visual mạnh hơn)
  → CR +10–15% (từ 35% → 45–50%)
```

---

## 📊 Tiêu chí hoàn thành Module 4

| # | Yêu cầu | Hoàn thành? |
|---|---------|-------------|
| 1 | Đánh giá Hook video bằng checklist 5 tiêu chí (/10 điểm) | ☐ |
| 2 | Viết prompt SHARP mới cho hook cải thiện | ☐ |
| 3 | Thu thập analytics thực tế vào bảng | ☐ |
| 4 | Xác định tình huống trong ma trận CR × Click Rate | ☐ |
| 5 | Phân tích biểu đồ retention (nếu có) | ☐ |
| 6 | Lập kế hoạch A/B Testing 2 tuần với ngân sách credits | ☐ |
| 7 | Dự đoán kết quả cho mỗi test | ☐ |

> ✅ Hoàn thành 6/7 → Bạn đã sẵn sàng sang **[Module 5: Xây dựng kênh TikTok →](../module-05-xay-dung-kenh/bai-hoc.md)!**

---

📘 **Bài học Module 4:** [Tối ưu thuật toán TikTok ←](bai-hoc.md)

📖 **Module tiếp theo:** [Module 5: Xây dựng kênh TikTok →](../module-05-xay-dung-kenh/bai-hoc.md)
