import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

export const InformationPage = (props) => {
    return <div>
        <h2>1. HƯỚNG DẪN THỦ TỤC</h2>
        <Collapse>
            <Panel header="CẤP HỘ CHIẾU PHỔ THÔNG" key="1">
                <h4>1.Hồ sơ</h4>
                <ul>
                    <li>Khai 01 tờ khai đề nghị cấp hộ chiếu theo mẫu quy định (X01)</li>
                    <li>02 ảnh cỡ 4x6, nền trắng, mặt nhìn thẳng, đầu để trần, không đeo kính màu (chụp ảnh tại cơ sở chụp ảnh được cơ quan Quản lý xuất nhập cảnh cho phép)</li>
                    <li>Giấy chứng minh nhân dân hoặc Thẻ căn cước công dân còn giá trị (xuất trình khi nộp hồ sơ để cơ quan Quản lý xuất nhập cảnh kiểm tra, đối chiếu)</li>
                    <li>Sổ tạm trú (nếu nộp hồ sơ tại nơi tạm trú)</li>
                </ul>
                <h4>2. Lệ phí: 200.000 đ (Hai trăm nghìn đồng).</h4>
            </Panel>
            <Panel header="CẤP LẠI HỘ CHIẾU DO BỊ HƯ HỎNG, BỊ MẤT" key="2">
                <h4>1.Hồ sơ</h4>
                <ul>
                    <li>Khai 01 tờ khai đề nghị cấp hộ chiếu theo mẫu quy định (X01)</li>
                    <li>02 ảnh cỡ 4x6, nền trắng, mặt nhìn thẳng, đầu để trần, không đeo kính màu (chụp ảnh tại cơ sở chụp ảnh được cơ quan Quản lý xuất nhập cảnh cho phép)</li>
                    <li>Giấy chứng minh nhân dân hoặc Thẻ căn cước công dân còn giá trị (xuất trình khi nộp hồ sơ để cơ quan Quản lý xuất nhập cảnh kiểm tra, đối chiếu)</li>
                    <li>Trường hợp hộ chiếu bị hư hỏng: nộp lại cho cơ quan Quản lý xuất nhập cảnh</li>
                    <li>Trường hợp hộ chiếu bị mất: nộp kèm đơn báo mất (mẫu X08) hoặc đơn trình bày về việc bị mất hộ chiếu.</li>
                </ul>
                <h4>2. Lệ phí: 400.000 đ (Bốn trăm nghìn đồng)</h4>
            </Panel>
            <Panel header="CẤP LẠI HỘ CHIẾU DO HỘ CHIẾU CŨ SẮP HẾT HẠN HOẶC HẾT TRANG " key="3">
                <h4>1.Hồ sơ</h4>
                <ul>
                    <li>Khai 01 tờ khai đề nghị cấp hộ chiếu theo mẫu quy định (X01)</li>
                    <li>02 ảnh cỡ 4x6, nền trắng, mặt nhìn thẳng, đầu để trần, không đeo kính màu (chụp ảnh tại cơ sở chụp ảnh được cơ quan Quản lý xuất nhập cảnh cho phép)</li>
                    <li>Giấy chứng minh nhân dân hoặc Thẻ căn cước công dân còn giá trị (xuất trình khi nộp hồ sơ để cơ quan Quản lý xuất nhập cảnh kiểm tra, đối chiếu)</li>
                    <li>Hộ chiếu phổ thông còn giá trị</li>
                </ul>
                <h4>2. Lệ phí: 200.000 đ (Bốn trăm nghìn đồng)</h4>
                <h4>Lưu ý: Trường hợp người đề nghị có nguyện vọng được giữ lại hộ chiếu thì đề nghị ghi rõ lý do</h4>
            </Panel>
        </Collapse>
        <h2>2. NƠI NỘP HỒ SƠ</h2>
        <ul>
            <li>Người đề nghị cấp hộ chiếu lần đầu, đề nghị cấp lại hộ chiếu do hết hạn trực tiếp nộp hồ sơ tại Phòng Quản lý xuất nhập cảnh Công an tỉnh, thành phố trực thuộc Trung ương nơi thường trú hoặc tạm trú.</li>
            <li>Người đề nghị cấp hộ chiếu do sắp hết hạn, do hư hỏng hoặc bị mất, đề nghị sửa đổi, bổ sung hộ chiếu nộp hồ sơ tại Phòng Quản lý xuất nhập cảnh Công an tỉnh, thành phố trực thuộc Trung ương nơi thường trú, tạm trú hoặc Cục Quản lý xuất nhập cảnh, Bộ Công an.</li>
        </ul>
        <strong>Lưu ý:</strong>
        <ul>
            <li>Người khai thông tin phải chịu trách nhiệm về tính xác thực của nội dung đã khai. Đối với trường hợp gửi hồ sơ đề nghị cấp lại hộ chiếu qua đường Bưu điện, trường hợp trẻ em dưới 14 tuổi đề nghị cấp hộ chiếu hoặc trường hợp ủy thác cho cơ quan, tổ chức, doanh nghiệp có tư cách pháp nhân nộp hồ sơ đề nghị cấp hộ chiếu, sau khi khai tờ khai điện tử người đề nghị phải in tờ khai và dán ảnh vào tờ khai để lấy xác nhận và giáp lai ảnh của Công an phường, xã, thị trấn nơi thường trú hoặc tạm trú hoặc Thủ trưởng cơ quan, tổ chức, doanh nghiệp được ủy thác. Đối với trường hợp trực tiếp nộp hồ sơ, người đề nghị cấp hộ chiếu có thể chụp ảnh bằng cách liên hệ với cơ sở chụp ảnh được cơ quan Quản lý xuất nhập cảnh cho phép.</li>
            <li>Trường hợp đề nghị cấp chung 02 trẻ em vào hộ chiếu của cha hoặc mẹ, sau khi nhập thông tin phải in 02 tờ khai (mỗi tờ tương ứng với thông tin của 01 trẻ em) để lấy xác nhận của Công an phường, xã, thị trấn nơi trẻ em thường trú hoặc tạm trú; trong trường hợp này, hộ chiếu của cha, mẹ cấp chung với con dưới 9 tuổi có thời hạn 05 năm.</li>
        </ul>
        <h2>3. TRÌNH TỰ THỰC HIỆN KHAI TỜ CHIẾU ĐIỆN TỬ ĐỀ NGHỊ CẤP HỘ CHIẾU</h2>
        <ol>
            <li> Nhập đầy đủ thông tin tờ khai đề nghị cấp hộ chiếu.</li>
            <li> In tờ khai đề nghị cấp hộ chiếu (tại nhà hoặc tại nơi nộp hồ sơ).</li>
            <li> Đặt lịch hẹn nộp hồ sơ (nếu có nhu cầu).</li>
            <li>  Đến nộp hồ sơ tại cơ quan Quản lý xuất nhập cảnh.</li>
        </ol>
    </div>
}