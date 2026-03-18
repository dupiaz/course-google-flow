# 📘 Module 2: Prompt Mastery — Viết prompt chuyên nghiệp cho sản phẩm gia dụng

> **Bloom Level:** Understand + Apply
> **Thời lượng:** ~60 phút đọc + thực hành
> **Mục tiêu:** Sau module này, bạn sẽ **giải thích** được cách prompt hoạt động, **áp dụng** công thức SHARP để viết prompt hiệu quả, và **tạo** được prompt ảnh/video cho sản phẩm gia dụng bằng Google Flow.

---

## 📑 Mục lục

1. [Prompt là gì? Tại sao quan trọng?](#1-prompt-là-gì-tại-sao-quan-trọng)
2. [Công thức SHARP — Framework viết prompt](#2-công-thức-sharp--framework-viết-prompt)
3. [Viết prompt cho Imagen 4 (ảnh)](#3-viết-prompt-cho-imagen-4-ảnh)
4. [Viết prompt cho Veo 3.1 (video)](#4-viết-prompt-cho-veo-31-video)
5. [⚠️ Lưu ý tuân thủ](#5-️-lưu-ý-tuân-thủ)
6. [Tóm tắt & Kiểm tra nhanh](#6-tóm-tắt--kiểm-tra-nhanh)

---

## 1. Prompt là gì? Tại sao quan trọng?

### 1.1. Prompt — "Lệnh" cho AI

**Prompt** (Câu lệnh mô tả bằng ngôn ngữ tự nhiên để AI tạo video/ảnh) chính là cách bạn **giao tiếp** với Google Flow. AI không biết bạn muốn gì — prompt là cách duy nhất để nói cho AI hiểu.

Hãy tưởng tượng bạn đang **đặt món ở nhà hàng**:
- Nói "cho tôi cái gì đó ăn" → Nhà hàng không biết bạn muốn gì → kết quả ngẫu nhiên
- Nói "cho tôi phở bò tái, thêm giá, rau quế, nước béo riêng" → Nhà hàng hiểu chính xác → đúng ý bạn

Prompt cũng vậy. **Càng chi tiết, càng chính xác → kết quả càng đẹp.**

### 1.2. So sánh prompt tốt vs prompt xấu

| | Prompt xấu ❌ | Prompt tốt ✅ |
|---|---|---|
| **Nội dung** | "Tạo video máy xay" | "Video cận cảnh máy xay sinh tố cầm tay màu hồng pastel đang xay sinh tố xoài, trong căn bếp hiện đại phong cách Scandinavian, ánh sáng tự nhiên buổi sáng, góc quay từ trên xuống, chuyển động chậm khi xay" |
| **Chi tiết** | Thiếu: màu sắc, bối cảnh, ánh sáng, góc quay | Đầy đủ: sản phẩm, màu, bối cảnh, ánh sáng, góc quay, chuyển động |
| **Kết quả** | AI tạo video mơ hồ, không đúng ý | AI tạo video gần đúng mong muốn |
| **Thời gian sửa** | Phải thử lại nhiều lần | Ít phải chỉnh sửa |

💡 **Quy tắc vàng:** Prompt tốt = tiết kiệm credits. Mỗi lần tạo lại video tốn ~100 credits. Viết prompt tốt ngay từ đầu giúp bạn **tận dụng tối đa credits hàng tháng**.

---

## 2. Công thức SHARP — Framework viết prompt

### 2.1. SHARP là gì?

**SHARP** là công thức 5 yếu tố giúp bạn viết prompt đầy đủ và hiệu quả cho video/ảnh gia dụng. Mỗi chữ cái đại diện cho một yếu tố:

| Chữ cái | Yếu tố | Giải thích | Ví dụ (Robot hút bụi) |
|---------|--------|-----------|----------------------|
| **S** | **Scene** (Bối cảnh) | Không gian, địa điểm, thời gian | "Phòng khách căn hộ hiện đại, sàn gỗ sáng, ánh nắng chiều qua cửa kính" |
| **H** | **Hero** (Nhân vật/Sản phẩm chính) | Sản phẩm nổi bật, mô tả chi tiết | "Robot hút bụi màu trắng Xiaomi, hình tròn, đèn LED xanh đang sáng" |
| **A** | **Action** (Hành động) | Sản phẩm đang làm gì | "Đang tự động di chuyển lau sàn, vòng qua chân bàn, hút bụi dọc tường" |
| **R** | **Result** (Kết quả) | Hiệu quả mang lại | "Sàn nhà sạch bóng, phản chiếu ánh nắng" |
| **P** | **Props** (Đạo cụ/Chi tiết phụ) | Yếu tố xung quanh tạo bối cảnh | "Cốc cà phê trên bàn, cây xanh góc phòng, thú cưng nằm trên sofa" |

### 2.2. Ví dụ áp dụng SHARP

**Sản phẩm: Máy lọc không khí**

> **S** — Phòng ngủ nhỏ kiểu tối giản, tông trắng-gỗ, cửa sổ mở hé, ngoài trời hơi mờ bụi
> **H** — Máy lọc không khí màu trắng hình trụ, đèn hiển thị chất lượng không khí màu xanh lá (tốt)
> **A** — Quạt quay nhẹ, luồng không khí sạch tỏa ra
> **R** — Không gian phòng trong trẻo, ánh sáng rõ ràng hơn
> **P** — Em bé đang ngủ ngon trên giường, gấu bông bên cạnh

**Prompt hoàn chỉnh:**
> Phòng ngủ nhỏ kiểu tối giản, tông trắng-gỗ, cửa sổ mở hé nhìn ra ngoài trời hơi mờ bụi. Máy lọc không khí màu trắng hình trụ đặt cạnh giường, đèn hiển thị chất lượng không khí sáng màu xanh lá. Quạt trong máy quay nhẹ, luồng không khí sạch tỏa ra nhẹ nhàng. Không gian phòng trong trẻo, ánh sáng ngoài cửa sổ rõ ràng hơn. Em bé đang ngủ ngon trên giường, gấu bông bên cạnh.

### 2.3. Khi nào KHÔNG cần đủ 5 yếu tố?

- **Ảnh sản phẩm hero shot** (chụp riêng sản phẩm): Chỉ cần S + H (bối cảnh đơn giản + sản phẩm nổi bật)
- **Video unboxing**: Cần S + H + A (mở hộp là action chính)
- **Video before/after**: Cần cả 5 yếu tố SHARP

💡 **Mẹo:** Bắt đầu với S + H + A trước. Khi đã quen, thêm R và P để video sinh động hơn.

---

## 3. Viết prompt cho Imagen 4 (ảnh)

### 3.1. Các loại ảnh cần cho affiliate

| Loại ảnh | Mục đích | Dùng ở đâu |
|----------|---------|-----------|
| **Hero shot** | Ảnh sản phẩm nổi bật, nền sạch | Thumbnail, ảnh chính |
| **Lifestyle** | Sản phẩm trong bối cảnh sử dụng thật | Video intro, quảng cáo |
| **Before/After** | So sánh trước/sau khi dùng sản phẩm | Nội dung viral |
| **Close-up** | Chi tiết sản phẩm (nút bấm, chất liệu) | Giải thích tính năng |
| **Multi-angle** | Nhiều góc nhìn của sản phẩm | Review chi tiết |

### 3.2. Prompt ảnh mẫu

**Hero shot — Nồi cơm điện thông minh:**
> Nồi cơm điện thông minh màu bạc với bảng điều khiển cảm ứng đang sáng, đặt trên mặt bàn đá marble trắng. Nền trắng sạch, ánh sáng studio mềm mại, góc chụp 45 độ từ trên xuống. Bên cạnh là bát cơm trắng nóng bốc khói và đôi đũa.

**Lifestyle — Quạt tích điện:**
> Cô gái trẻ Việt Nam đang làm việc tại quán cà phê, quạt tích điện mini màu pastel đặt trên bàn chĩa vào mặt. Quán cà phê phong cách minimalist, cây xanh nền, ánh nắng tự nhiên. Cô gái mỉm cười thoải mái, tóc bay nhẹ vì gió quạt.

**Before/After — Robot hút bụi:**
> Ảnh chia đôi: bên trái là sàn nhà bụi bẩn với lông thú cưng, mảng bụi ở góc tường, ánh sáng mờ. Bên phải là cùng sàn nhà nhưng sạch bóng, phản chiếu ánh sáng, robot hút bụi trắng đứng ở giữa với đèn LED xanh sáng. Đường phân chia rõ ràng ở giữa.

### 3.3. Checklist chất lượng ảnh

Trước khi dùng ảnh AI, kiểm tra:

- [ ] Sản phẩm có đúng hình dạng thực tế không? (AI đôi khi thêm/bớt nút bấm)
- [ ] Chữ trên sản phẩm có bị biến dạng không? (AI thường render chữ sai)
- [ ] Tay người (nếu có) có đủ 5 ngón không? (lỗi phổ biến của AI)
- [ ] Bối cảnh có hợp lý không? (phòng bếp VN, không phải bếp Tây)
- [ ] Ánh sáng có tự nhiên không?

---

## 4. Viết prompt cho Veo 3.1 (video)

### 4.1. Các dạng video affiliate phổ biến

| Dạng video | Mô tả | Độ dài khuyến nghị |
|-----------|-------|-------------------|
| **Hook** (3s đầu) | Thu hút dừng lại | 3 giây |
| **Demo sử dụng** | Show cách dùng sản phẩm | 8–15 giây |
| **Unboxing** | Mở hộp, khám phá sản phẩm | 8–15 giây |
| **Before/After** | So sánh trước/sau | 8 giây |
| **Comparison** | So sánh 2 sản phẩm | 15 giây |

### 4.2. Prompt video mẫu

**Hook — Máy xay sinh tố (3 giây đầu):**
> Video cận cảnh chuyển động chậm: trái cây tươi — xoài, chuối, dâu tây — rơi vào cối máy xay sinh tố cầm tay. Nước bắn nhẹ, màu sắc tươi sáng. Nền trắng sạch, ánh sáng studio. Góc quay thấp từ dưới lên.

**Demo — Nồi cơm thông minh (8 giây):**
> Video quay cận cảnh bàn tay chạm vào bảng điều khiển cảm ứng của nồi cơm điện thông minh màu bạc. Đèn LED sáng lên, hiển thị chế độ nấu. Camera zoom out chậm, thấy nồi đặt trên bếp trong căn bếp hiện đại. Hơi nước bắt đầu thoát ra nhẹ nhàng từ van xả.

**Before/After — Robot hút bụi (8 giây):**
> Video chia đôi màn hình: bên trái là sàn nhà đầy bụi, lông thú cưng, mảng bụi ở góc tường, ánh sáng mờ u ám. Chuyển cảnh mượt mà sang bên phải: robot hút bụi trắng lướt trên sàn, sàn sạch bóng, ánh nắng chiều chiếu qua cửa kính, phản chiếu lung linh.

### 4.3. Lưu ý kỹ thuật khi viết prompt video

1. **Chỉ định chuyển động camera:** "zoom in," "zoom out," "pan (lia ngang)," "tilt (nghiêng lên/xuống)," "orbit (quay quanh vật thể)"
2. **Chỉ định tốc độ:** "chuyển động chậm (slow motion)," "tốc độ bình thường," "time-lapse (tua nhanh)"
3. **Chỉ định chuyển cảnh:** "chuyển cảnh mượt mà," "cắt nhanh," "fade (mờ dần)"
4. **Chỉ định ánh sáng:** "ánh sáng tự nhiên buổi sáng," "ánh sáng studio," "golden hour (giờ vàng)," "backlight (ngược sáng)"
5. **Giới hạn 8 giây:** Mỗi prompt Veo 3.1 tạo tối đa 8 giây. Dùng **Scene Builder** (Trình xây dựng cảnh) để ghép nhiều clip.

💡 **Mẹo tiết kiệm credits:** Viết prompt chi tiết nhất có thể ngay lần đầu. Mỗi lần retry tốn ~100 credits (tương đương tiền thuê app 1 ngày trong gói Free).

---

## 5. ⚠️ Lưu ý tuân thủ

### 5.1. Prompt KHÔNG được tạo nội dung gây hiểu lầm

❌ **KHÔNG viết prompt:**
- Tạo video giả vờ là feedback KOC/KOL thật (giả mạo review)
- Tạo video với claim sai sự thật ("máy lọc khí diệt 100% virus")
- Tạo video sử dụng khuôn mặt người nổi tiếng mà không có phép
- Tạo video mô phỏng unboxing như đang quay thật mà không gắn nhãn AI

✅ **NÊN viết prompt:**
- Tạo video demo sản phẩm rõ ràng, đúng tính năng
- Tạo video so sánh trung thực (before/after thực tế)
- Tạo video lifestyle phù hợp với đối tượng Việt Nam
- Luôn kết hợp với ảnh/video sản phẩm thật khi có thể

### 5.2. Luôn gắn nhãn AI

Nhắc lại từ [Module 1](../module-01-nen-tang/bai-hoc.md#5-️-lưu-ý-tuân-thủ):
- TikTok **bắt buộc** gắn nhãn AI cho mọi video AI
- Google Flow tự động nhúng **SynthID** (watermark ẩn) — bạn không thể ẩn nguồn gốc AI
- Hãy **chủ động** gắn nhãn bằng toggle hoặc sticker trong TikTok khi đăng

### 5.3. Quy tắc bản quyền

- Video tạo bởi AI hiện **không được bảo hộ bản quyền** tại nhiều quốc gia
- Bất kỳ ai cũng có thể sao chép video AI của bạn mà không vi phạm pháp luật
- Hãy tập trung vào **tốc độ sản xuất** và **chất lượng nội dung** thay vì lo bảo vệ bản quyền

---

## 6. Tóm tắt & Kiểm tra nhanh

### 📝 Tóm tắt Module 2

| Khái niệm | Bạn cần nhớ |
|-----------|------------|
| **Prompt** | Câu lệnh để giao tiếp với AI — càng chi tiết càng tốt |
| **SHARP** | 5 yếu tố: Scene, Hero, Action, Result, Props |
| **Imagen 4** | Tạo ảnh: hero shot, lifestyle, before/after, close-up |
| **Veo 3.1** | Tạo video: hook, demo, unboxing, comparison — tối đa 8 giây/clip |
| **Scene Builder** | Ghép nhiều clip 8 giây thành video dài hơn |
| **Chi phí** | ~100 credits/video 8 giây. Prompt tốt = tiết kiệm credits |

### ✅ Kiểm tra nhanh — Bạn đã hiểu chưa?

1. **Giải thích** tại sao prompt chi tiết giúp tiết kiệm credits.
2. **Áp dụng** công thức SHARP: viết prompt cho 1 sản phẩm gia dụng bất kỳ.
3. **Phân biệt** prompt ảnh (Imagen 4) và prompt video (Veo 3.1) — khác nhau ở yếu tố nào?
4. **Liệt kê** 3 loại nội dung KHÔNG được tạo bằng AI cho affiliate.
5. Bạn có thể ghép nhiều clip 8 giây bằng công cụ nào trong Google Flow?

> 💡 Trả lời được 4/5 → Bạn đã sẵn sàng sang **[Module 3: Quy trình sản xuất](../module-03-quy-trinh-san-xuat/bai-hoc.md)!**

---

📎 **Bài tập thực hành:** [module-02-prompt-mastery/bai-tap.md](bai-tap.md)

📋 **Thư viện Prompt Templates:** [module-02-prompt-mastery/prompt-templates.md](prompt-templates.md)

📖 **Module tiếp theo:** [Module 3: Quy trình sản xuất A-Z →](../module-03-quy-trinh-san-xuat/bai-hoc.md)
