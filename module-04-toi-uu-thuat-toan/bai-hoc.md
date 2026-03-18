# 📘 Module 4: Tối ưu thuật toán TikTok

> **Bloom Level:** Analyze + Evaluate
> **Thời lượng:** ~75 phút đọc + thực hành
> **Mục tiêu:** Sau module này, bạn sẽ **phân tích** được cách thuật toán TikTok hoạt động để đánh giá hiệu suất video, và **đánh giá** được chiến lược tối ưu nào phù hợp nhất để tăng lượt xem và chuyển đổi affiliate.

---

## 📑 Mục lục

1. [Thuật toán TikTok hoạt động như thế nào?](#1-thuật-toán-tiktok-hoạt-động-như-thế-nào)
2. [5 tín hiệu thuật toán đánh giá video](#2-5-tín-hiệu-thuật-toán-đánh-giá-video)
3. [Tối ưu Completion Rate — yếu tố số 1](#3-tối-ưu-completion-rate--yếu-tố-số-1)
4. [Tối ưu Hook — 3 giây quyết định tất cả](#4-tối-ưu-hook--3-giây-quyết-định-tất-cả)
5. [Đọc và phân tích TikTok Analytics](#5-đọc-và-phân-tích-tiktok-analytics)
6. [A/B Testing video — so sánh để cải thiện](#6-ab-testing-video--so-sánh-để-cải-thiện)
7. [Chiến lược đăng bài tối ưu](#7-chiến-lược-đăng-bài-tối-ưu)
8. [⚠️ Lưu ý tuân thủ](#8-️-lưu-ý-tuân-thủ)
9. [Tóm tắt & Kiểm tra nhanh](#9-tóm-tắt--kiểm-tra-nhanh)

---

## 1. Thuật toán TikTok hoạt động như thế nào?

### 1.1. Hệ thống đề xuất (Recommendation System)

Thuật toán TikTok quyết định video nào xuất hiện trên trang **For You Page (FYP)** — nơi hầu hết người dùng xem nội dung. Hiểu thuật toán = hiểu cách để video affiliate của bạn tiếp cận đúng người mua.

**Quy trình phân phối video của TikTok:**

```
┌──────────────────┐
│ Bạn đăng video   │
└────────┬─────────┘
         ▼
┌──────────────────────────────────┐
│ VÒNG 1: Nhóm test nhỏ           │
│ ~200–500 người xem               │
│ TikTok đo: watch time, like,     │
│ comment, share, completion rate   │
└────────┬─────────────────────────┘
         ▼
    Hiệu suất tốt?
    ┌────┴────┐
   CÓ        KHÔNG
    ▼          ▼
┌──────────┐ ┌──────────────────┐
│ VÒNG 2:  │ │ Video dừng phân  │
│ 1K–10K   │ │ phối (chết yểu)  │
│ người    │ └──────────────────┘
└────┬─────┘
     ▼
  Tiếp tục tốt?
     ▼
┌──────────┐    ┌──────────┐
│ VÒNG 3:  │ →  │ VIRAL:   │
│ 10K–100K │    │ 100K+    │
└──────────┘    └──────────┘
```

💡 **Điểm quan trọng:** Video affiliate của bạn **phải thắng ngay từ Vòng 1** — nếu 500 người đầu tiên không tương tác, thuật toán sẽ dừng phân phối. Đó là lý do Hook mạnh là bắt buộc (xem [Module 3, Section 8.1 — HDRCA](../module-03-quy-trinh-san-xuat/bai-hoc.md#81-cấu-trúc-hdrca--5-phần-của-video-affiliate-thành-công)).

### 1.2. "Content Graph" vs. "Social Graph"

TikTok khác Facebook/Instagram ở một điểm cốt lõi:

| Yếu tố | TikTok | Facebook/Instagram |
|---------|--------|--------------------|
| Cơ chế đề xuất | **Content Graph** — dựa trên NỘI DUNG video | Social Graph — dựa trên BẠN BÈ |
| Kênh mới có cơ hội? | ✅ Rất cao — video hay = viral dù 0 follower | ❌ Khó — cần follower sẵn |
| Quan trọng nhất | Chất lượng video | Số lượng follower |

✅ **Tin tốt cho bạn:** Với TikTok, dù kênh mới tinh (0 follower), video chất lượng vẫn có thể viral. Thuật toán **không** ưu ái KOL/KOC lớn — chỉ ưu ái **video có performance tốt**.

---

## 2. 5 tín hiệu thuật toán đánh giá video

Thuật toán TikTok đánh giá mỗi video dựa trên **5 tín hiệu chính** (xếp theo mức độ quan trọng):

| # | Tín hiệu | Mô tả | Trọng số | Liên kết Module trước |
|---|-----------|-------|----------|----------------------|
| 1 | **Completion Rate** | Tỷ lệ % xem hết video | ⭐⭐⭐⭐⭐ | [Module 3, Section 8.3](../module-03-quy-trinh-san-xuat/bai-hoc.md#83-bài-tập-phân-tích-so-sánh-2-cấu-trúc-video) |
| 2 | **Watch Time** | Tổng thời gian xem (giây) | ⭐⭐⭐⭐ | — |
| 3 | **Engagement Rate** | Like + Comment + Share + Save | ⭐⭐⭐ | — |
| 4 | **Profile Visit** | Người xem click vào profile | ⭐⭐ | — |
| 5 | **Rewatch Rate** | Tỷ lệ xem lại video | ⭐⭐ | — |

### 2.1. Phân tích mối quan hệ giữa các tín hiệu

```
Completion Rate ↑ → Watch Time ↑ → Thuật toán đẩy video ra nhiều người hơn
                                   → Engagement Rate ↑ (nhiều người xem = nhiều tương tác)
                                   → Profile Visit ↑ (người xem muốn xem thêm)
                                   → Rewatch Rate ↑ (video hay → xem lại)
```

💡 **Kết luận:** Tất cả tín hiệu đều **bắt nguồn từ Completion Rate**. Nếu người xem lướt qua video trong 2 giây đầu → tất cả tín hiệu khác = 0. Vì vậy, phần tiếp theo sẽ tập trung vào cách tối ưu Completion Rate.

---

## 3. Tối ưu Completion Rate — yếu tố số 1

### 3.1. Completion Rate là gì?

**Completion Rate** (Tỷ lệ xem hết video) = Tỷ lệ % người xem video đến hết so với tổng lượt xem. Đây là yếu tố **quan trọng nhất** quyết định thuật toán TikTok có đề xuất video của bạn hay không (đã giới thiệu ở [Module 3, Section 8.3](../module-03-quy-trinh-san-xuat/bai-hoc.md#83-bài-tập-phân-tích-so-sánh-2-cấu-trúc-video)).

**Benchmark Completion Rate cho video affiliate gia dụng 30 giây:**

| Mức | Completion Rate | Ý nghĩa | Thuật toán sẽ... |
|-----|----------------|---------|-------------------|
| 🔴 Kém | < 20% | Người xem lướt qua | Dừng phân phối |
| 🟡 Trung bình | 20–40% | Có hấp dẫn nhưng chưa đủ | Phân phối giới hạn |
| 🟢 Tốt | 40–60% | Video hấp dẫn | Đẩy mạnh phân phối |
| 🔵 Xuất sắc | > 60% | Video rất hấp dẫn | Viral tiềm năng |

### 3.2. 7 kỹ thuật tăng Completion Rate

| # | Kỹ thuật | Giải thích | Ví dụ (Robot hút bụi) |
|---|---------|-----------|----------------------|
| 1 | **Hook mạnh** | 3 giây đầu phải khiến dừng scroll | \"Nhà có boss lông dài?\" + sàn bẩn |
| 2 | **Curiosity gap** | Tạo khoảng trống tò mò → muốn xem hết | \"Kết quả ở cuối video...\" |
| 3 | **Pattern interrupt** | Thay đổi nhịp/âm thanh/hình ảnh giữa chừng | Chuyển bất ngờ từ sàn bẩn → sàn sạch bóng |
| 4 | **Thời lượng tối ưu** | Video ngắn hơn = dễ đạt completion rate cao | 15–30s thay vì 60s |
| 5 | **Text overlay liên tục** | Cho người xem lý do đọc từng giây | Mỗi scene có text mới |
| 6 | **Loop video** | Đoạn kết nối liền mạch với đoạn đầu → xem lại | CTA cuối → link giỏ hàng → quay lại hook |
| 7 | **Cấu trúc HDRCA** | Giữ người xem qua 5 phần liên tục | Hook → Demo → Result → Credibility → Action |

### 3.3. Phân tích: Tại sao video 30 giây hiệu quả hơn 60 giây?

| Tiêu chí | Video 30s | Video 60s |
|----------|-----------|-----------|
| Completion rate trung bình | 45–55% | 25–35% |
| Watch time tuyệt đối | 13–17 giây | 15–21 giây |
| Rewatch rate | Cao (ngắn, dễ xem lại) | Thấp |
| Credits tiêu tốn | ~300–500 | ~600–1.000 |
| Phù hợp cho affiliate? | ✅ Rất phù hợp | ⚠️ Cần kỹ năng cao |

💡 **Đánh giá:** Watch time tuyệt đối gần tương đương, nhưng Completion Rate video 30s **cao gấp đôi** → thuật toán ưu tiên hơn. Với người mới, **30 giây là "sweet spot"** — đủ dài để demo sản phẩm, đủ ngắn để giữ completion rate cao.

---

## 4. Tối ưu Hook — 3 giây quyết định tất cả

### 4.1. Tại sao Hook quan trọng?

Hook (3 giây đầu tiên — xem [Module 1, Thuật ngữ](../module-01-nen-tang/bai-hoc.md#4-thuật-ngữ-cần-biết)) quyết định người xem **dừng lại hay lướt qua**. Trên TikTok, người dùng trung bình quyết định trong **1.5–3 giây**.

```
          100% người xem video
               │
               ▼ (3 giây đầu)
         ┌─────┴─────┐
    Hook MẠNH    Hook YẾU
         │            │
    70% ở lại    20% ở lại
         │            │
         ▼            ▼
    Xem tiếp     Scroll đi
    Demo/Result   → Video "chết"
```

### 4.2. 5 kiểu Hook hiệu quả cho video affiliate gia dụng

| # | Kiểu Hook | Mô tả | Ví dụ prompt Veo 3.1 | Hiệu quả |
|---|-----------|-------|---------------------|-----------|
| 1 | **Vấn đề → Giải pháp** | Cho thấy vấn đề quen thuộc | \"Sàn nhà bẩn, lông thú cưng rải khắp nơi\" → Robot xuất hiện | ⭐⭐⭐⭐⭐ |
| 2 | **Before/After** | Hai trạng thái đối lập | Split screen: Bếp bẩn ngổn ngang ↔ Bếp sạch bóng | ⭐⭐⭐⭐ |
| 3 | **Câu hỏi kích thích** | Đặt câu hỏi → muốn biết đáp án | Text: \"Bạn có biết cái này thay thế 3 thiết bị?\" | ⭐⭐⭐⭐ |
| 4 | **Wow moment** | Bắt đầu bằng kết quả bất ngờ | Máy lọc không khí, số PM2.5 giảm từ 150 → 15 | ⭐⭐⭐ |
| 5 | **POV (Point of View)** | Góc nhìn cá nhân, gần gũi | \"POV: Bạn mua máy xay 200k và...\" + kết quả bất ngờ | ⭐⭐⭐ |

### 4.3. Đánh giá Hook: Checklist 5 tiêu chí

Khi đánh giá Hook của video (của bạn hoặc đối thủ), dùng checklist sau:

| Tiêu chí | Câu hỏi đánh giá | Điểm |
|----------|-------------------|------|
| **Dừng scroll** | Có yếu tố gì khiến ngón tay dừng lại? (visual mạnh, text lớn, âm thanh bất ngờ) | /2 |
| **Liên quan** | Đối tượng mục tiêu có thấy mình trong hook? (vấn đề quen thuộc) | /2 |
| **Tò mò** | Có tạo khoảng trống tò mò → muốn xem tiếp? | /2 |
| **Rõ ràng** | Trong 3 giây, có hiểu video nói về gì? | /2 |
| **Sản phẩm** | Sản phẩm có xuất hiện hoặc được gợi ý? | /2 |
| **Tổng** | | **/10** |

**Thang đánh giá:**
- **8–10 điểm:** Hook xuất sắc — giữ cho video tiếp theo
- **5–7 điểm:** Cần cải thiện 1–2 yếu tố
- **< 5 điểm:** Nên làm lại hook hoàn toàn

### 4.4. Ví dụ đánh giá: So sánh 2 Hook

**Hook A** — Video Máy xay sinh tố:
> Ảnh sản phẩm tĩnh + text: "Máy xay sinh tố XYZ — giá 350.000đ"

**Hook B** — Video Máy xay sinh tố:
> Cận cảnh tay bỏ đá + trái cây vào cốc xay → bấm nút → sinh tố tràn ra mịn màng trong 10 giây

| Tiêu chí | Hook A | Hook B |
|----------|--------|--------|
| Dừng scroll | 0/2 — ảnh tĩnh, giống quảng cáo | 2/2 — chuyển động, màu sắc |
| Liên quan | 1/2 — ai cũng biết máy xay | 2/2 — \"mình cũng muốn xay nhanh\" |
| Tò mò | 0/2 — đã biết hết thông tin | 1/2 — muốn xem kết quả sinh tố |
| Rõ ràng | 2/2 — rất rõ | 2/2 — ngay tiêu đề |
| Sản phẩm | 1/2 — có nhưng chỉ ảnh tĩnh | 2/2 — đang demo trực tiếp |
| **Tổng** | **4/10** ❌ | **9/10** ✅ |

💡 **Bài học:** Hook B hiệu quả hơn vì kết hợp **hành động** (action) + **kết quả tức thì** (result). Ảnh tĩnh + giá = giống quảng cáo truyền thống → người xem lướt qua. Áp dụng công thức SHARP (xem [Module 2](../module-02-prompt-mastery/bai-hoc.md#2-công-thức-sharp--framework-viết-prompt)) để tạo hook có action rõ ràng.

---

## 5. Đọc và phân tích TikTok Analytics

### 5.1. Truy cập TikTok Analytics

Để đọc analytics, bạn cần **TikTok Business Account** (miễn phí):

1. Mở TikTok → **Profile** → **⋯** (menu) → **Quản lý tài khoản**
2. Chọn **Chuyển sang Tài khoản Doanh nghiệp** (Switch to Business)
3. Chọn ngành hàng: **Nhà cửa & Gia dụng**
4. Hoàn tất → giờ bạn có mục **Analytics** trong profile

### 5.2. 4 nhóm metrics quan trọng

**Nhóm 1: Video Performance** (Hiệu suất video)

| Metric | Ý nghĩa | Benchmark tốt (30s video) | Cách cải thiện |
|--------|---------|---------------------------|----------------|
| **Views** | Tổng lượt xem | > 1.000 trong 24h đầu | Đăng giờ vàng, hashtag phù hợp |
| **Average Watch Time** | Thời gian xem trung bình | > 15 giây (cho video 30s) | Cải thiện hook + giảm thời lượng |
| **Completion Rate** | Tỷ lệ xem hết | > 40% | Xem Section 3 ở trên |
| **Traffic Source** | Nguồn xem (FYP, Profile, Search) | FYP > 60% | Tối ưu cho thuật toán |

**Nhóm 2: Engagement** (Tương tác)

| Metric | Ý nghĩa | Benchmark tốt | Cách cải thiện |
|--------|---------|---------------|----------------|
| **Like Rate** | Tỷ lệ like/view | > 4% | Nội dung chạm cảm xúc |
| **Comment Rate** | Tỷ lệ comment/view | > 0.5% | Đặt câu hỏi trong CTA |
| **Share Rate** | Tỷ lệ share/view | > 0.3% | Nội dung hữu ích, \"tag bạn\" |
| **Save Rate** | Tỷ lệ save/view | > 1% | Nội dung có giá trị tham khảo |

**Nhóm 3: Affiliate Metrics** (Chỉ số affiliate)

| Metric | Ý nghĩa | Benchmark tốt | Cách cải thiện |
|--------|---------|---------------|----------------|
| **Click Rate** | Tỷ lệ click vào giỏ hàng/view | > 2% | CTA rõ ràng, icon nổi bật |
| **Conversion Rate** | Tỷ lệ mua/click | > 3% | Chọn sản phẩm đúng nhu cầu |
| **GMV** (Gross Merchandise Value) | Tổng giá trị đơn hàng | Tùy sản phẩm | Chọn sản phẩm giá trị cao |
| **Commission** | Hoa hồng thực nhận | > 50.000đ/video | Chọn SP hoa hồng cao (≥10%) |

**Nhóm 4: Audience** (Đối tượng)

| Metric | Ý nghĩa | Cách sử dụng |
|--------|---------|-------------|
| **Gender** | Giới tính người xem | Điều chỉnh nội dung phù hợp |
| **Age** | Độ tuổi | Chọn sản phẩm phù hợp nhóm tuổi |
| **Active Hours** | Giờ online | Đăng bài đúng giờ |
| **Location** | Vị trí | Tập trung thành phố lớn |

### 5.3. Cách đọc biểu đồ Analytics

**Biểu đồ Audience Retention (Tỷ lệ giữ chân):**

```
100% ┤█████████
     │         ▓▓▓▓▓▓▓
     │                ▓▓▓▓▓▓
     │                      ▓▓▓▓▓▓
     │                            ▓▓▓▓▓
     │                                 ▓▓▓
     │                                    ▓▓
  0% ┤─────────────────────────────────────────
     0s    5s    10s   15s   20s   25s   30s
        Hook    Demo        Result    CTA
```

**Cách phân tích:**
1. **Điểm rơi lớn nhất (drop-off):** Ở giây thứ mấy người xem rời đi nhiều nhất?
   - Rơi ở 1–3 giây → Hook yếu → Cần đổi hook
   - Rơi ở 5–10 giây → Demo nhàm chán → Cần thêm pattern interrupt
   - Rơi ở 20–25 giây → Video quá dài hoặc result không ấn tượng

2. **Đoạn tăng (spike):** Có đoạn nào người xem tua lại xem không?
   - Spike = nội dung hay → lặp lại pattern này ở video sau

3. **Phần đuôi (tail):** Video kết thúc khi còn bao nhiêu % người xem?
   - Tail > 40% → Video rất hấp dẫn
   - Tail < 20% → Cần rút ngắn video

### 5.4. Ví dụ phân tích thực tế

**Video: Robot hút bụi — 30 giây**

| Metric | Giá trị | Đánh giá |
|--------|---------|---------|
| Views (24h) | 2.500 | 🟢 Tốt — vượt Vòng 1 |
| Avg Watch Time | 18 giây | 🟢 60% video — xuất sắc |
| Completion Rate | 52% | 🟢 Trên benchmark 40% |
| Like Rate | 5.2% | 🟢 Trên benchmark 4% |
| Comment Rate | 0.3% | 🟡 Gần benchmark 0.5% |
| Share Rate | 0.8% | 🟢 Trên benchmark 0.3% |
| Click Rate (giỏ hàng) | 1.5% | 🟡 Dưới benchmark 2% |
| Conversion Rate | 4.0% | 🟢 Trên benchmark 3% |

**Đánh giá tổng thể:**
- ✅ **Điểm mạnh:** Completion rate cao (52%), hook hiệu quả, share tốt
- ⚠️ **Cần cải thiện:** Comment rate thấp → thêm câu hỏi trong CTA ("Nhà bạn nuôi boss gì? Comment cho mình biết!")
- ⚠️ **Cần cải thiện:** Click rate thấp → CTA chưa đủ rõ → thêm text overlay "🛒 Link ở giỏ hàng ↓" lớn hơn + flash animation

---

## 6. A/B Testing video — so sánh để cải thiện

### 6.1. A/B Testing là gì?

**A/B Testing** (xem [Module 1 — Thuật ngữ](../module-01-nen-tang/bai-hoc.md#4-thuật-ngữ-cần-biết)) là tạo **nhiều phiên bản video** cùng sản phẩm nhưng **thay đổi 1 yếu tố** để so sánh hiệu quả. Ở [Module 2, Bài tập 3](../module-02-prompt-mastery/bai-tap.md), bạn đã thử A/B testing prompt — bây giờ áp dụng ở cấp độ chiến lược.

### 6.2. Nguyên tắc A/B Testing

**Quy tắc vàng: Chỉ thay đổi 1 yếu tố mỗi lần test.**

| Biến số test | Video A (Control) | Video B (Variant) | So sánh gì? |
|-------------|-------------------|-------------------|-------------|
| **Hook** | Vấn đề → Giải pháp | Before/After | Kiểu hook nào giữ chân? |
| **Thời lượng** | 15 giây | 30 giây | Ngắn hay dài tốt hơn? |
| **CTA** | \"Mua ngay link ở giỏ hàng\" | \"Comment 'muốn' để nhận link\" | CTA nào chuyển đổi hơn? |
| **Nhạc** | Nhạc trending EDM | Nhạc acoustic nhẹ nhàng | Nhạc nào phù hợp? |
| **Giờ đăng** | 12:00 trưa | 20:00 tối | Giờ nào nhiều view? |

### 6.3. Quy trình A/B Testing 5 bước

```
Bước 1              Bước 2             Bước 3
Chọn biến số  →  Tạo 2 video   →  Đăng cùng thời điểm
(chỉ 1 yếu tố)   (A và B)          (hoặc cách 1h)
                                          │
Bước 5              Bước 4            ◄───┘
Áp dụng cho    ←  So sánh metrics
video tiếp         sau 48h
```

**Chi tiết mỗi bước:**

| Bước | Hành động | Lưu ý |
|------|----------|-------|
| 1. Chọn biến số | Xác định 1 yếu tố muốn test | Ưu tiên: Hook > CTA > Thời lượng |
| 2. Tạo 2 video | Dùng Google Flow tạo 2 phiên bản | Tiết kiệm: tái sử dụng clip chung |
| 3. Đăng | Đăng A và B cách nhau ≤ 1 giờ | Cùng hashtag, cùng caption |
| 4. So sánh | Đợi 48h → so sánh metrics | Tập trung: Comp. Rate, Click Rate |
| 5. Áp dụng | Phiên bản thắng → dùng cho video sau | Ghi chú kết quả vào bảng |

### 6.4. Bảng ghi chú A/B Testing

Dùng bảng này để theo dõi kết quả test:

| Test # | Ngày | Sản phẩm | Biến số test | Video A | Video B | Kết quả | Bài học |
|--------|------|----------|-------------|---------|---------|---------|---------|
| 1 | dd/mm | Robot hút bụi | Hook | Vấn đề→GP | Before/After | A thắng (CR 52% vs 38%) | Vấn đề→GP phù hợp gia dụng |
| 2 | dd/mm | Máy xay | CTA | Link giỏ hàng | Comment muốn | B thắng (Click 3.1% vs 1.5%) | Tương tác CTA > Trực tiếp CTA |
| ... | | | | | | | |

### 6.5. Đánh giá chi phí A/B Testing với Google Flow

| Chiến lược | Credits cần | Phù hợp gói |
|------------|------------|-------------|
| Test hook (giữ nguyên demo + CTA) | ~200 thêm (1 clip hook mới) | Pro trở lên |
| Test CTA (thay ảnh CTA cuối) | ~50 thêm (1 ảnh mới) | Free + Pro |
| Test thời lượng (cắt bớt vs giữ nguyên) | ~0 thêm (edit trong Scene Builder) | Free |
| Test nhạc/giờ đăng | 0 thêm | Free |

💡 **Mẹo tiết kiệm credits:** Bắt đầu test từ yếu tố **không tốn credits** (nhạc, giờ đăng, caption) trước → khi tìm được nhạc/giờ tối ưu → test hook/CTA (tốn credits).

---

## 7. Chiến lược đăng bài tối ưu

### 7.1. Tần suất đăng bài

Ở [Module 3, Section 7.3](../module-03-quy-trinh-san-xuat/bai-hoc.md#73-thời-gian-đăng-tối-ưu), bạn đã biết khung giờ vàng. Bây giờ hãy **đánh giá** chiến lược đăng bài phù hợp với từng mục tiêu:

| Chiến lược | Tần suất | Phù hợp khi | Ưu điểm | Nhược điểm |
|-----------|----------|-------------|---------|-----------|
| **Tập trung** | 1 video/tuần, chất lượng cao | Gói Free, mới bắt đầu | Tập trung chất lượng, tiết kiệm credits | Chậm tăng trưởng |
| **Cân bằng** | 2–3 video/tuần | Gói Pro, đã có kinh nghiệm | Đủ data để A/B test | Cần nhiều thời gian |
| **Tăng tốc** | 5–7 video/tuần | Gói Ultra hoặc kết hợp ảnh thật | Tăng trưởng nhanh, nhiều data | Tốn credits, dễ mệt |

💡 **Khuyến nghị cho người mới:** Bắt đầu với chiến lược **Tập trung** — 1 video/tuần, chất lượng cao, đánh giá kỹ analytics trước khi làm video tiếp.

### 7.2. Chiến lược hashtag

| Loại hashtag | Ví dụ | Số lượng | Mục đích |
|-------------|-------|----------|---------|
| **Trending** | #tiktokmademebuyit #xuhuong | 1–2 | Tăng khả năng lên FYP |
| **Niche** | #robothuibui #giadungthongminh | 1–2 | Nhắm đúng đối tượng |
| **Branded** | #reviewgiadung #smarthomeliving | 1 | Xây dựng thương hiệu kênh |

**Tổng: 3–5 hashtag/video** — không nên dùng quá nhiều (TikTok có thể coi là spam).

### 7.3. Chiến lược series (loạt video)

Một trong những chiến lược hiệu quả nhất là tạo **series video cho cùng 1 sản phẩm**:

| Video | Nội dung | Mục đích |
|-------|----------|---------|
| Video 1 | Hook mạnh + Demo tính năng chính | Thu hút, tạo awareness |
| Video 2 | Before/After + Result chi tiết | Chứng minh hiệu quả |
| Video 3 | Q&A — trả lời comment từ Video 1 & 2 | Tương tác, tăng credibility |
| Video 4 | So sánh sản phẩm A vs B | Giúp khách hàng quyết định |
| Video 5 | \"1 tháng sử dụng — review thật\" | Long-term credibility |

💡 **Series giúp:**
- Người xem Video 1 → vào profile → xem Video 2, 3... → **Profile Visit ↑**
- Comment Video 1 hỏi → Video 3 trả lời → **Engagement ↑**
- Thuật toán thấy profile có nhiều video liên quan → **đề xuất nhiều hơn**

### 7.4. Ma trận đánh giá chiến lược

Dùng ma trận này để **đánh giá** chiến lược hiện tại và chọn hướng điều chỉnh:

| Tình huống | Completion Rate | Click Rate | Hành động |
|-----------|----------------|------------|-----------|
| 🟢🟢 CR cao + Click cao | > 40% | > 2% | Giữ nguyên format, tăng tần suất |
| 🟢🔴 CR cao + Click thấp | > 40% | < 2% | Video hấp dẫn nhưng CTA yếu → đổi CTA |
| 🔴🟢 CR thấp + Click cao | < 40% | > 2% | Hook yếu nhưng ai xem hết thì mua → đổi hook |
| 🔴🔴 CR thấp + Click thấp | < 40% | < 2% | Cần thay đổi cả nội dung lẫn chiến lược |

---

## 8. ⚠️ Lưu ý tuân thủ

### 8.1. Thuật toán và nội dung AI

❌ **KHÔNG:**
- Spam video hàng loạt (>10 video/ngày) → TikTok phát hiện = shadow ban
- Dùng bot hoặc tool tăng view/like giả → ban vĩnh viễn
- Copy chính xác video người khác (kể cả AI remake) → vi phạm bản quyền
- Tạo video deepfake KOC/KOL để review (xem thêm [Module 2, Section 5.1](../module-02-prompt-mastery/bai-hoc.md#51-prompt-không-được-tạo-nội-dung-gây-hiểu-lầm))

✅ **NÊN:**
- Gắn nhãn AI trên MỌI video (xem [Module 1, Section 5.1](../module-01-nen-tang/bai-hoc.md#51-quy-định-gắn-nhãn-ai-của-tiktok-2026)) — **BẮT BUỘC**
- Tạo nội dung gốc, sáng tạo, không sao chép
- Tuân thủ Community Guidelines của TikTok
- Ghi disclaimer cho video chỉ mang tính minh họa

### 8.2. Affiliate compliance

- **Minh bạch:** Nếu bạn kiếm hoa hồng từ sản phẩm → nên ghi rõ (ví dụ: "Video có chứa link affiliate")
- **Trung thực:** Không phóng đại tính năng sản phẩm. Nếu robot hút bụi không diệt khuẩn → không claim "diệt 99.9% vi khuẩn"
- **Sản phẩm thật:** TikTok Shop yêu cầu bạn phải sở hữu hoặc đã dùng thử sản phẩm trước khi review (xem [Module 1, Research Data](../module-01-nen-tang/bai-hoc.md))

### 8.3. Quản lý kỳ vọng

| Điều nên biết | Chi tiết |
|--------------|----------|
| Không phải video nào cũng viral | Tỷ lệ viral tự nhiên ~1–5%. Hầu hết video đạt 200–2.000 view — đó là **bình thường** |
| A/B Testing cần **thời gian** | Cần ít nhất 5–10 cặp test để thấy pattern rõ ràng |
| Thu nhập affiliate **tích lũy** | Tháng đầu có thể < 500.000đ. Tháng 3–6 khi có nhiều data + video → tăng nhanh |
| Thuật toán thay đổi | TikTok cập nhật thuật toán thường xuyên — luôn theo dõi analytics |

### 8.4. SynthID và thuật toán TikTok

Video tạo từ Google Flow có **SynthID** (watermark ẩn) và **C2PA metadata** (xem [Module 1, Section 5.2](../module-01-nen-tang/bai-hoc.md#52-synthid-và-c2pa--watermark-ẩn)). TikTok có thể phát hiện:

- Nếu bạn **chủ động gắn nhãn AI** → TikTok **không** giảm reach
- Nếu bạn **không gắn nhãn** → TikTok phát hiện qua SynthID → auto-label + **giảm reach** → completion rate giảm → thuật toán phạt kép

💡 **Kết luận:** Gắn nhãn AI = tuân thủ = thuật toán không phạt = video vẫn có cơ hội viral bình thường.

---

## 9. Tóm tắt & Kiểm tra nhanh

### 📝 Tóm tắt Module 4

| Chủ đề | Bạn cần nhớ |
|--------|-------------|
| **Thuật toán TikTok** | Phân phối theo vòng (200 → 1K → 10K → 100K+). Content Graph ưu ái video hay, không cần nhiều follower |
| **5 tín hiệu** | Completion Rate > Watch Time > Engagement > Profile Visit > Rewatch. Tất cả bắt nguồn từ Completion Rate |
| **Completion Rate** | Benchmark > 40%. 7 kỹ thuật: Hook mạnh, Curiosity gap, Pattern interrupt, Thời lượng tối ưu, Text liên tục, Loop, HDRCA |
| **Hook** | 5 kiểu: Vấn đề→GP, Before/After, Câu hỏi, Wow moment, POV. Checklist 5 tiêu chí cho /10 điểm |
| **Analytics** | 4 nhóm metrics: Performance, Engagement, Affiliate, Audience. Đọc biểu đồ retention để tìm drop-off |
| **A/B Testing** | 1 biến số/lần. Test không tốn credits trước (nhạc, giờ). Ghi bảng kết quả |
| **Chiến lược** | Ma trận CR×Click Rate. Series video 5 phần. Người mới: 1 video/tuần |

### ✅ Kiểm tra nhanh — Bạn đã hiểu chưa?

1. **Phân tích:** Thuật toán TikTok phân phối video qua mấy vòng? Yếu tố nào quyết định video vượt qua Vòng 1?

2. **Phân tích:** Video A có Completion Rate 55% nhưng Click Rate chỉ 0.8%. Dựa vào ma trận đánh giá, video này thuộc tình huống nào? Bạn sẽ cải thiện yếu tố gì?

3. **Đánh giá:** Biểu đồ retention cho thấy 60% người xem rời đi ở giây thứ 4–5. Nguyên nhân có thể là gì? Đề xuất 2 cách cải thiện.

4. **Đánh giá:** Bạn có 1.000 credits (gói Pro). Hãy thiết kế 1 kế hoạch A/B Testing cho tháng tới: test bao nhiêu lần? Test yếu tố gì trước? Tại sao?

5. **Đánh giá:** So sánh chiến lược \"Tập trung\" (1 video/tuần) vs \"Cân bằng\" (3 video/tuần) cho một người mới bắt đầu với gói Pro. Bạn khuyến nghị chiến lược nào? Giải thích.

> 💡 Trả lời được 4/5 → Bạn đã sẵn sàng sang **[Module 5: Xây dựng kênh TikTok →](../module-05-xay-dung-kenh/bai-hoc.md)!**

---

📎 **Bài tập thực hành:** [module-04-toi-uu-thuat-toan/bai-tap.md](bai-tap.md)

📖 **Module trước:** [Module 3: Quy trình sản xuất video affiliate A-Z ←](../module-03-quy-trinh-san-xuat/bai-hoc.md)

📖 **Module tiếp theo:** [Module 5: Xây dựng kênh TikTok →](../module-05-xay-dung-kenh/bai-hoc.md)
