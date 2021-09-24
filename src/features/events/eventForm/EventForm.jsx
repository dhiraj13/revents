import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, FormField, Header, Label, Segment } from 'semantic-ui-react'
import cuid from 'cuid'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import MyTextInput from '../../../app/common/form/MyTextInput'

export default function EventForm({ history, match }) {
  const dispatch = useDispatch()
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  )

  const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  }

  const validationSchema = Yup.object({
    title: Yup.string().required('You must provide a title'),
  })

  // function handleFormSubmit() {
  //   selectedEvent
  //     ? dispatch(updateEvent({ ...selectedEvent, ...values }))
  //     : dispatch(
  //         createEvent({
  //           ...values,
  //           id: cuid(),
  //           hostedBy: 'Bob',
  //           attendees: [],
  //           hostPhotoURL: '/assets/user.png',
  //         })
  //       )
  //   history.push('/events')
  // }

  return (
    <Segment clearing>
      <Header content={selectedEvent ? 'Edit the event' : 'Create new event'} />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <Form className='ui form'>
          <MyTextInput name='title' placeholder='Event title' />
          <FormField>
            <Field name='category' placeholder='Category' />
          </FormField>
          <FormField>
            <Field name='description' placeholder='Description' />
          </FormField>
          <FormField>
            <Field name='city' placeholder='City' />
          </FormField>
          <FormField>
            <Field name='venue' placeholder='Venue' />
          </FormField>
          <FormField>
            <Field name='date' placeholder='Event date' type='date' />
          </FormField>
          <Button type='submit' floated='right' positive content='Submit' />
          <Button
            as={Link}
            to='/events'
            type='submit'
            floated='right'
            content='Cancel'
          />
        </Form>
      </Formik>
    </Segment>
  )
}
