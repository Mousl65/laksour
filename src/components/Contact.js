import React, {useState} from 'react';
import { db } from './firebase'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function Contact() {

const [Nom, setNom]= useState("");
const [Prenom, setPrenom]= useState("");
const [Telephone, setTelephone]= useState("");
const [Adresse, setAdresse]= useState("");
const [email,setEmail]= useState("");
const [garçon,setGarçon]= useState("");
const [naissancegarçon,setNaissancegarçon]= useState("");
const [fille,setFille]= useState("");
const [naissancefille,setNaissanefille]= useState("");
const [niveauetude,setNiveauetude]= useState("");
const [sport,setSport]= useState("");
const [sport1,setSport1]= useState("");
const [sport2,setSport2]= useState("");
const [sport3,setSport3]= useState("");
const [sport4,setSport4]= useState("");
const [sport5,setSport5]= useState("");
const [autresport,setAutresport]= useState("");
const [autresport2,setAutresport2]= useState("");
const [autresport3,setAutresport3]= useState("");
const [culture,setCulture]= useState("");
const [culture2,setCulture2]=useState("");
const [culture3,setCulture3]=useState("");
const [culture4,setCulture4]=useState("");
const [culture5,setCulture5]=useState("");
const [culture6,setCulture6]=useState("");
const [autreculture,setAutreculture]=useState("");
const [autreculture2,setAutreculture2]=useState("");
const [autreculture3,setAutreculture3]=useState("");
const [fichier, setFichier]= useState("");

const handleSubmit =(e)=>{
    e.preventDefault ();
    db.collection("figuig").add({
      Nom,Prenom,Telephone,Adresse,email,garçon,naissancegarçon
      ,fille,naissancefille,niveauetude,sport,sport1,sport2,
      sport3,sport4,sport5,autresport,
      autresport2,autresport3,culture,
      culture2,culture3,culture4,culture5,
      culture6,autreculture,autreculture2,autreculture3,fichier,
    })
    .then(()=>{alert('Message envoyé');} )
    .catch((error)=>{alert(error.message);});

    setNom("");
    setPrenom("");
    setTelephone("");
    setAdresse("");
    setEmail("");
    setGarçon("");
    setNaissancegarçon("");
    setFille("");
    setNaissanefille("");
    setNiveauetude("");
    setSport("");
    setSport1("");
    setSport2("");
    setSport3("");
    setSport4("");
    setSport5("");
    setAutresport("");
    setAutresport2("");
    setAutresport3("");
    setCulture("");
    setCulture2("");
    setCulture3("");
    setCulture4("");
    setCulture5("");
    setCulture6("");
    setAutreculture("");
    setAutreculture2("");
    setAutreculture3("");
    setFichier("");
    
};

  return (
    <div> 
<form onSubmit={handleSubmit} className='form1'>
      <div className='formulaire'>
          <h2>بطاقة معلومات</h2>
          </div>

        <div className='tuteur'>   <h3>الاب او ولي الامر</h3></div>

  <InputGroup className="mb-2 mt-2 w-50 p-2   ">
           <Form.Control onChange={e=>setNom(e.target.value)}
          value={Nom}  ></Form.Control> 
          <InputGroup.Text   type='nom'>الاسم العائلي</InputGroup.Text> 
</InputGroup>
<InputGroup className="mb-2 mt-2 w-50 p-2">
<Form.Control onChange={e=>setPrenom(e.target.value)}
value={Prenom} aria-label="Prenom" />
<InputGroup.Text type='Prenom'>الاسم الشخصي</InputGroup.Text>
</InputGroup>

<InputGroup className="mb-2 mt-2 w-50 p-2   ">
<Form.Control onChange={e=>setTelephone(e.target.value)} value={Telephone}
 ></Form.Control> 
<InputGroup.Text   type="Phone Number" > رقم الهاتف</InputGroup.Text> 
</InputGroup>

<InputGroup className="mb-2 mt-2 w-50 p-2   ">
<Form.Control onChange={e=> setAdresse(e.target.value)} value={Adresse}
as="textarea"></Form.Control> 
<InputGroup.Text   >العنوان </InputGroup.Text> 
</InputGroup>

<InputGroup className="mb-2 mt-2 w-50 p-2   ">
<Form.Control onChange={e=>setEmail(e.target.value)}
value={email}  ></Form.Control> 
<InputGroup.Text   type='nom'> (Email) العنوان الالكتروني </InputGroup.Text> 
</InputGroup>
  
 <div className='enfant'> <h3>الابناء</h3></div>

  <InputGroup className="mb-2 mt-2 w-50 p-2   ">
<Form.Control onChange={e=>setGarçon(e.target.value)}
value={garçon}  ></Form.Control> 
<InputGroup.Text   type='number'>عدد الأبناء</InputGroup.Text> 
</InputGroup>

<InputGroup className="mb-2 mt-2 w-50 p-2   ">
<Form.Control onChange={e=> setNaissancegarçon(e.target.value)} value={naissancegarçon}
as="textarea"></Form.Control> 
<InputGroup.Text   >تاريخ اازديادهم</InputGroup.Text> 
</InputGroup>

<InputGroup className="mb-2 mt-2 w-50 p-2   ">
<Form.Control onChange={e=>setFille(e.target.value)}
value={fille}  ></Form.Control> 
<InputGroup.Text   type='number'> عدد البنات</InputGroup.Text> 
</InputGroup>
  

<InputGroup className="mb-2 mt-2 w-50 p-2   ">
<Form.Control onChange={e=> setNaissanefille(e.target.value)} value={naissancefille}
as="textarea"></Form.Control> 
<InputGroup.Text> تاريخ ازديادهن</InputGroup.Text>    
</InputGroup>

<InputGroup className="mb-2 mt-2 w-50 p-2   ">
<Form.Control onChange={e=> setNiveauetude(e.target.value)} value={niveauetude}
as="textarea"></Form.Control> 
<InputGroup.Text   >المستوى الدراسي للابناء</InputGroup.Text> 
</InputGroup>

    <div className='sportpreferer'><h5>النوع الرياضي المفضل</h5> </div>
 

 <Form.Group className="mb-2 mt-2 w-50 p-2">
 <Form.Control onChange={e=>setSport(e.target.value)} 
 type="text" value={sport} placeholder="اسم الابن او الابنة و عمره (اختيار النوع الرياضي)" />
 </Form.Group>
 <Form.Select  className="mb-2 mt-2 w-50 p-2" aria-label="Default select example"
 onChange={e=>setSport1(e.target.value)}
value={sport1}>
 <option>اختر نوع رياضي</option>
 <option value="كرة القدم">كرة القدم </option>
 <option value="الكرة الطائرة">الكرة الطائرة</option>
 <option value="كرة السلة">كرة السلة</option>
<option value="السباحة">السباحة</option>
<option value="ألعاب القوى">ألعاب القوى</option>
<option value="رياضة اخرى"></option>
</Form.Select>

<Form.Group className="w-50 p-2 mr-3">
  <Form.Control onChange={e=>setAutresport(e.target.value)} 
     type="text" value={autresport} placeholder="النوع الرياضي الاخر" />
</Form.Group>

<Form.Group className="mb-2 mt-2 w-50 p-2">
<Form.Control onChange={e=>setSport2(e.target.value)} 
type="text" value={sport2} placeholder="اسم الابن او الابنة و عمره (اختيار النوع الرياضي)" />
</Form.Group>
<Form.Select  className="mb-2 mt-2 w-50 p-2" aria-label="Default select example"
onChange={e=>setSport3(e.target.value)}
value={sport3}>
<option>اختر نوع رياضي</option>
<option value="كرة القدم">كرة القدم </option>
<option value="الكرة الطائرة">الكرة الطائرة</option>
<option value="كرة السلة">كرة السلة</option>
<option value="السباحة">السباحة</option>
<option value="ألعاب القوى">ألعاب القوى</option>
<option value="رياضة اخرى"></option>
</Form.Select>

<Form.Group className="w-50 p-2 mr-3">
 <Form.Control onChange={e=>setAutresport2(e.target.value)} 
    type="text" value={autresport2} placeholder="النوع الرياضي الاخر" />
</Form.Group>
 
<Form.Group className="mb-2 mt-2 w-50 p-2">
<Form.Control onChange={e=>setSport4(e.target.value)} 
type="text" value={sport4} placeholder="اسم الابن او الابنة و عمره (اختيار النوع الرياضي)" />
</Form.Group>
<Form.Select  className="mb-2 mt-2 w-50 p-2" aria-label="Default select example"
onChange={e=>setSport5(e.target.value)}
value={sport5}>
<option>اختر نوع رياضي</option>
<option value="كرة القدم">كرة القدم </option>
<option value="الكرة الطائرة">الكرة الطائرة</option>
<option value="كرة السلة">كرة السلة</option>
<option value="السباحة">السباحة</option>
<option value="ألعاب القوى">ألعاب القوى</option>
<option value="رياضة اخرى"></option>
</Form.Select>

<Form.Group className="w-50 p-2 mr-3">
 <Form.Control onChange={e=>setAutresport3(e.target.value)} 
    type="text" value={autresport3} placeholder="النوع الرياضي الاخر" />
</Form.Group>
 
  
    <div className='sportpreferer'>  <h5>الانشطة الثقافية المفضلة</h5></div>

<Form.Group className="mb-2 mt-2 w-50 p-2">
<Form.Control onChange={e=>setCulture(e.target.value)} 
type="text" value={culture} placeholder="اسم الابن او الابنة عمره (اختيار الانشطة الثقافية المفضلة)" />
</Form.Group>

<Form.Select  className="mb-2 mt-2 w-50 p-2" aria-label="Default select example"
 onChange={e=>setCulture2(e.target.value)}
value={culture2}>    
   <option>اختر نشاط ثقافي</option>
   <option value="المسرح">المسرح</option>
   <option value="الموسيقى">الموسيقى</option>
   <option value="الرسم">الرسم</option>
   <option value="الرحلات">الرحلات</option>
   <option value="المخيمات">المخيمات</option>
   </Form.Select>
   
<Form.Group className="w-50 p-2 mr-3">
  <Form.Control onChange={e=>setAutreculture(e.target.value)} 
     type="text" value={autreculture} placeholder="النشاط الثقافي الاخر"/>
</Form.Group>

<Form.Group className="mb-2 mt-2 w-50 p-2">
<Form.Control onChange={e=>setCulture3(e.target.value)} 
type="text" value={culture3} placeholder="اسم الابن او الابنة عمره (اختيار الانشطة الثقافية المفضلة)" />
</Form.Group>

<Form.Select  className="mb-2 mt-2 w-50 p-2" aria-label="Default select example"
 onChange={e=>setCulture4(e.target.value)}
value={culture4}>    
   <option>اختر نشاط ثقافي</option>
   <option value="المسرح">المسرح</option>
   <option value="الموسيقى">الموسيقى</option>
   <option value="الرسم">الرسم</option>
   <option value="الرحلات">الرحلات</option>
   <option value="المخيمات">المخيمات</option>
   </Form.Select>
   
<Form.Group className="w-50 p-2 mr-3">
  <Form.Control onChange={e=>setAutreculture2(e.target.value)} 
     type="text" value={autreculture2} placeholder="النشاط الثقافي الاخر"/>
</Form.Group>

<Form.Group className="mb-2 mt-2 w-50 p-2">
<Form.Control onChange={e=>setCulture5(e.target.value)} 
type="text" value={culture5} placeholder="اسم الابن او الابنة عمره (اختيار الانشطة الثقافية المفضلة)" />
</Form.Group>

<Form.Select  className="mb-2 mt-2 w-50 p-2" aria-label="Default select example"
 onChange={e=>setCulture6(e.target.value)}
value={culture6}>    
   <option>اختر نشاط ثقافي</option>
   <option value="المسرح">المسرح</option>
   <option value="الموسيقى">الموسيقى</option>
   <option value="الرسم">الرسم</option>
   <option value="الرحلات">الرحلات</option>
   <option value="المخيمات">المخيمات</option>
   </Form.Select>
   
<Form.Group className="w-50 p-2 mr-3">
  <Form.Control onChange={e=>setAutreculture3(e.target.value)} 
     type="text" value={autreculture3} placeholder="النشاط الثقافي الاخر"/>
</Form.Group>
 
 <div className='fichier'>   <h5>يمكن ارسال اية وثيقة في الموضوع في الخانة اسفله</h5></div>

  <Form.Group controlId="formFile" className="mb-2 mt-2 w-50 p-2">
        <Form.Label onChange={e=>setFichier(e.target.value)} value={fichier}></Form.Label>
        <Form.Control type="file" />
   </Form.Group>

   
     
    <Form.Group className="mb-3 p-1">
    <Form.Check
      required
      label="Accepte les termes et conditions"
      feedback="You must agree before submitting."
      feedbackType="invalid" />
  </Form.Group>
  <Button className='P-2 m-2  mb-2 ' type="submit">إرسال</Button>

  </form>
 
  
  </div>
);
}
  

export default Contact;

