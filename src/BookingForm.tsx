import React from 'react';
import { Form, Input, Select, DatePicker, InputNumber, Checkbox, Button } from 'antd';
import './App.css';

const { Option } = Select;
const { TextArea } = Input;

const BookingForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values:', values);
  };

  return (
    <div className="booking-form">
      <Form
        form={form}
        name="booking"
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ tripType: 'Пляжный отдых' }}
      >
        <h1>Забронируйте свое путешествие!</h1>
        <Form.Item
          label="Ваше имя:"
          name="name"
          rules={[{ required: true, message: 'Пожалуйста, введите ваше имя!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Ваш email:"
          name="email"
          rules={[{ required: true, message: 'Пожалуйста, введите ваш email!' }]}
        >
          <Input type="email" />
        </Form.Item>
        <Form.Item label="Тип путешествия:" name="tripType">
          <Select>
            <Option value="Экскурсионный тур">Экскурсионный тур</Option>
            <Option value="Пляжный отдых">Пляжный отдых</Option>
            <Option value="Приключения">Приключения</Option>
            <Option value="Круиз">Круиз</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Количество путешественников:"
          name="travelers"
        >
          <InputNumber min={1} max={10} />
        </Form.Item>
        <Form.Item
          label="Дата начала путешествия:"
          name="startDate"
        >
          <DatePicker />
        </Form.Item>
        <Form.Item label="Ваши пожелания:" name="preferences">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[{ validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('Согласие обязательно!')) }]}
        >
          <Checkbox>
            Я согласен на обработку моих персональных данных.
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Забронировать
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BookingForm;
