import Table from 'react-bootstrap/Table';

function Planing() {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
         
        <th>الشخص المكلف</th>
          <th>المضمون</th>
          <th>التوقيت</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          
          <td>أعضاء مكتب الجمعية</td>
          <td>استقبال اعضاء اللجان و المدعوين</td>
          <td>15:00</td>
        </tr>
        <tr>
         
          <td>السيد الرئيس</td>
          <td>كلمة ترحيبية</td>
          <td>15:15</td>
        </tr>
        <tr>
         
          <td>عبد الرحيم سلمي</td>
          <td>نبدة عن جمعية لقصور</td>
          <td>15:20</td>
        </tr>
        <tr>
         
        <td>محمد اكسو</td>
        <td>تقديم اللجان</td>
        <td>15:30</td>
      </tr>
      <tr>
         
      <td>السيد الرئيس</td>
      <td>شرح مقتضب لعمل اللجان و كيفية تسطير الانشطة و البرامج</td>
      <td>15:35</td>
    </tr>
    <tr>
         
    <td>اعضاء المكتب</td>
    <td>توزيع الاوراق و الادوات على اللجان</td>
    <td>15:45</td>
  </tr>
  <tr>
         
  <td>اعضاء اللجان</td>
  <td>انطلاق الاشغال</td>
  <td>15:50</td>
</tr>
<tr>
         
<td>رئيس اللجنة</td>
<td>عرض كل لجنة لبرنامجها و مناقشته من طرف الحاضرون</td>
<td>16:30</td>
</tr>
<tr>
         
<td>رؤساء اللجان </td>
<td>تسطير البرنامج العام الدي يضم جميع الانشطة و البرامج المقترحة</td>
<td>17:30</td>
</tr>
<tr>
         
<td>السيد الرئيس</td>
<td>انتهاء الاشغال و حفلة شاي</td>
<td>18:30</td>
</tr>
      
      </tbody>
    </Table>
  );
}

export default Planing;