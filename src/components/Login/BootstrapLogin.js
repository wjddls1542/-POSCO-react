import { Button, Col, Container, Form, Input, Row } from 'reactstrap';

const BootstrapLogin = () => {
   return (
      <div className="LoginPage">
         <Container className="bg-light border">
            <Row style={{ rowGap: '1em', padding: '3em' }}>
               <Col xl={12}>
                  <img
                     src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
                     alt="Logo"></img>
               </Col>
               <Col xl={12}>
                  <Form className="LoginForm">
                     <Input type="text" placeholder="ID"></Input>
                     <Input type="password" placeholder="Password"></Input>
                     <Button type={'submit'} color="primary" block>
                        로그인
                     </Button>
                  </Form>
               </Col>
            </Row>
         </Container>
         <Container className="big-light border">
            <Row style={{ padding: '1em', textAlign: 'center' }}>
               <p>
                  계정이 없으신가요? <a href="g">가입하기</a>
               </p>
            </Row>
         </Container>
         {/* <AuthRouter></AuthRouter> */}
      </div>
   );
};
export default BootstrapLogin;
