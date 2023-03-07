import React, {useState} from 'react';
import { db } from './firebase'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
const [autresport,setAutresport]= useState("");
const [sport2,setSport2]= useState("");
const [autresport2,setAutresport2]= useState("");

const [culture,setCulture]= useState("");
const [autreculture,setAutreculture]=useState("");
const [fichier, setFichier]= useState("");
const [football, setFootball]= useState("");
const [theatre,setTheatre]= useState("");


const handleSubmit =(e)=>{
    e.preventDefault ();
    db.collection("figuig").add({
      Nom,Prenom,Telephone,Adresse,email,garçon,naissancegarçon
      ,fille,naissancefille,niveauetude,sport,autresport,
      sport2,autresport2,
      culture,autreculture,fichier,football,theatre
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
    setAutresport("");
    setSport2("");
    setAutresport2("");
    setCulture("");
    setAutreculture("");
    setFichier("");
    setFootball("");
    setTheatre("");
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
 
<Form.Check  className="mb-0  "
type="checkbox" label="كرة القدم" onChange={e=>setFootball(e.target.value)}
value={football}/>
<Form.Check  className="mb-0  "
type="checkbox" label="الكرة الطائرة" />
<Form.Check  className="mb-0  "
type="checkbox" label="كرة السلة " />
<Form.Check  className="mb-0  "
type="checkbox" label="السباحة " />
<Form.Check  className="mb-0  "
type="checkbox" label="ألعاب القوى" />
</Form.Group>

<Row className="autre">
  <Col>
   <Form.Check  className="mb-0  "
     type="checkbox" label="نوع اخر"/>
  </Col>
  <Col sm>
<Form.Group className="w-50 p-2 mr-3">
  <Form.Control onChange={e=>setAutresport(e.target.value)} 
     type="text" value={autresport} placeholder="النوع الرياضي الاخر" />
</Form.Group>
  </Col>
</Row>

<Form.Group className="mb-2 mt-2 w-50 p-2">
 <Form.Control onChange={e=>setSport2(e.target.value)} 
 type="text" value={sport2} placeholder="اسم الابن او الابنة و عمره (اختيار النوع الرياضي)" />
 </Form.Group>
<Form.Check  className="mb-0  "
type="checkbox" label="كرة القدم"/>
<Form.Check  className="mb-0  "
type="checkbox" label="الكرة الطائرة" />
<Form.Check  className="mb-0  "
type="checkbox" label="كرة السلة " />
<Form.Check  className="mb-0  "
type="checkbox" label="السباحة " />
<Form.Check  className="mb-0  "
type="checkbox" label="ألعاب القوى" />

<Row className="autre">
  <Col>
   <Form.Check  className="mb-0  "
     type="checkbox" label="نوع اخر"/>
  </Col>
  <Col sm>
<Form.Group className="w-50 p-2 mr-3">
  <Form.Control onChange={e=>setAutresport2(e.target.value)} 
     type="text" value={autresport2} placeholder="النوع الرياضي الاخر" />
</Form.Group>
  </Col>
</Row>

<Form.Group className="mb-2 mt-2 w-50 p-2">
 <Form.Control onChange={e=>setSport(e.target.value)} 
 type="text" value={sport} placeholder="اسم الابن او الابنة و عمره (اختيار النوع الرياضي)" />
 </Form.Group>
<Form.Check  className="mb-0  "
type="checkbox" label="كرة القدم"/>
<Form.Check  className="mb-0  "
type="checkbox" label="الكرة الطائرة" />
<Form.Check  className="mb-0  "
type="checkbox" label="كرة السلة " />
<Form.Check  className="mb-0  "
type="checkbox" label="السباحة " />
<Form.Check  className="mb-0  "
type="checkbox" label="ألعاب القوى" />

<Row className="autre">
  <Col>
   <Form.Check  className="mb-0  "
     type="checkbox" label="نوع اخر"/>
  </Col>
  <Col sm>
<Form.Group className="w-50 p-2 mr-3">
  <Form.Control onChange={e=>setAutresport(e.target.value)} 
     type="text" value={autresport} placeholder="النوع الرياضي الاخر" />
</Form.Group>
  </Col>
</Row>

<Form.Group className="mb-2 mt-2 w-50 p-2">
 <Form.Control onChange={e=>setSport(e.target.value)} 
 type="text" value={sport} placeholder="اسم الابن او الابنة و عمره (اختيار النوع الرياضي)" />
 </Form.Group>
<Form.Check  className="mb-0  "
type="checkbox" label="كرة القدم"/>
<Form.Check  className="mb-0  "
type="checkbox" label="الكرة الطائرة" />
<Form.Check  className="mb-0  "
type="checkbox" label="كرة السلة " />
<Form.Check  className="mb-0  "
type="checkbox" label="السباحة " />
<Form.Check  className="mb-0  "
type="checkbox" label="ألعاب القوى" />

<Row className="autre">
  <Col>
   <Form.Check  className="mb-0  "
     type="checkbox" label="نوع اخر"/>
  </Col>
  <Col sm>
<Form.Group className="w-50 p-2 mr-3">
  <Form.Control onChange={e=>setAutresport(e.target.value)} 
     type="text" value={autresport} placeholder="النوع الرياضي الاخر" />
</Form.Group>
  </Col>
</Row>


<Form.Group className="mb-2 mt-2 w-50 p-2">
 <Form.Control onChange={e=>setSport(e.target.value)} 
 type="text" value={sport} placeholder="اسم الابن او الابنة و عمره (اختيار النوع الرياضي)" />
 </Form.Group>
<Form.Check  className="mb-0  "
type="checkbox" label="كرة القدم"/>
<Form.Check  className="mb-0  "
type="checkbox" label="الكرة الطائرة" />
<Form.Check  className="mb-0  "
type="checkbox" label="كرة السلة " />
<Form.Check  className="mb-0  "
type="checkbox" label="السباحة " />
<Form.Check  className="mb-0  "
type="checkbox" label="ألعاب القوى" />

<Row className="autre">
  <Col>
   <Form.Check  className="mb-0  "
     type="checkbox" label="نوع اخر"/>
  </Col>
  <Col sm>
<Form.Group className="w-50 p-2 mr-3">
  <Form.Control onChange={e=>setAutresport(e.target.value)} 
     type="text" value={autresport} placeholder="النوع الرياضي الاخر" />
</Form.Group>
  </Col>
</Row>


    <div className='sportpreferer'>  <h5>الانشطة الثقافية المفضلة</h5></div>

<Form.Group className="mb-2 mt-2 w-50 p-2">
<Form.Control onChange={e=>setCulture(e.target.value)} 
type="text" value={culture} placeholder="اسم الابن او الابنة عمره (اختيار الانشطة الثقافية المفضلة)" />
</Form.Group>
<Form.Check  className="mb-0  "
type="checkbox" label="المسرح" onChange={e=>setTheatre(e.target.value)}
value={theatre} />
<Form.Check  className="mb-0  "
type="checkbox" label="الرسم" />
<Form.Check  className="mb-0  "
type="checkbox" label="الموسيقى" />
<Form.Check  className="mb-0  "
type="checkbox" label="الرحلات" />
<Form.Check  className="mb-0  "
type="checkbox" label="المخيمات" />

<Row className="autre">
  <Col>
   <Form.Check  className="mb-0  "
     type="checkbox" label="نوع اخر"/>
  </Col>
  <Col sm>
<Form.Group className="w-50 p-2 mr-3">
  <Form.Control onChange={e=>setAutreculture(e.target.value)} 
     type="text" value={autreculture} placeholder="النشاط الثقافي الاخر"/>
</Form.Group>
  </Col>
</Row>

<Form.Group className="mb-2 mt-2 w-50 p-2">
<Form.Control onChange={e=>setCulture(e.target.value)} 
type="text" value={culture} placeholder="اسم الابن او الابنة عمره (اختيار الانشطة الثقافية المفضلة)" />
</Form.Group>
<Form.Check  className="mb-0  "
type="checkbox" label="المسرح" />
<Form.Check  className="mb-0  "
type="checkbox" label="الرسم" />
<Form.Check  className="mb-0  "
type="checkbox" label="الموسيقى" />
<Form.Check  className="mb-0  "
type="checkbox" label="الرحلات" />
<Form.Check  className="mb-0  "
type="checkbox" label="المخيمات" />

<Row className="autre">
  <Col>
   <Form.Check  className="mb-0  "
     type="checkbox" label="نوع اخر"/>
  </Col>
  <Col sm>
<Form.Group className="w-50 p-2 mr-3">
  <Form.Control onChange={e=>setAutreculture(e.target.value)} 
     type="text" value={autreculture} placeholder="النشاط الثقافي الاخر"/>
</Form.Group>
  </Col>
</Row>

<Form.Group className="mb-2 mt-2 w-50 p-2">
<Form.Control onChange={e=>setCulture(e.target.value)} 
type="text" value={culture} placeholder="اسم الابن او الابنة عمره (اختيار الانشطة الثقافية المفضلة)" />
</Form.Group>
<Form.Check  className="mb-0  "
type="checkbox" label="المسرح" />
<Form.Check  className="mb-0  "
type="checkbox" label="الرسم" />
<Form.Check  className="mb-0  "
type="checkbox" label="الموسيقى" />
<Form.Check  className="mb-0  "
type="checkbox" label="الرحلات" />
<Form.Check  className="mb-0  "
type="checkbox" label="المخيمات" />

<Row className="autre">
  <Col>
   <Form.Check  className="mb-0  "
     type="checkbox" label="نوع اخر"/>
  </Col>
  <Col sm>
<Form.Group className="w-50 p-2 mr-3">
  <Form.Control onChange={e=>setAutreculture(e.target.value)} 
     type="text" value={autreculture} placeholder="النشاط الثقافي الاخر"/>
</Form.Group>
  </Col>
</Row>

<Form.Group className="mb-2 mt-2 w-50 p-2">
<Form.Control onChange={e=>setCulture(e.target.value)} 
type="text" value={culture} placeholder="اسم الابن او الابنة عمره (اختيار الانشطة الثقافية المفضلة)" />
</Form.Group>
<Form.Check  className="mb-0  "
type="checkbox" label="المسرح" />
<Form.Check  className="mb-0  "
type="checkbox" label="الرسم" />
<Form.Check  className="mb-0  "
type="checkbox" label="الموسيقى" />
<Form.Check  className="mb-0  "
type="checkbox" label="الرحلات" />
<Form.Check  className="mb-0  "
type="checkbox" label="المخيمات" />

<Row className="autre">
  <Col>
   <Form.Check  className="mb-0  "
     type="checkbox" label="نوع اخر"/>
  </Col>
  <Col sm>
<Form.Group className="w-50 p-2 mr-3">
  <Form.Control onChange={e=>setAutreculture(e.target.value)} 
     type="text" value={autreculture} placeholder="النشاط الثقافي الاخر"/>
</Form.Group>
  </Col>
</Row>
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

