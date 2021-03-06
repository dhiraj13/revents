import { useDispatch } from 'react-redux'
import { Button, Header, Segment } from 'semantic-ui-react'
import cuid from 'cuid'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import MyTextInput from '../../../app/common/form/MyTextInput'
import { createEvent, updateEvent } from '../eventActions'
import MyTextArea from '../../../app/common/form/MyTextArea'
import MySelectInput from '../../../app/common/form/MySelectInput'
import { categoryOptions } from '../../../app/api/categoryOptions'
import MyDateInput from '../../../app/common/form/MyDateInput'
import MyPlaceInput from '../../../app/common/form/MyPlaceInput'

export default function EventForm({ history, match }) {
  const dispatch = useDispatch()
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  )

  const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: {
      address: '',
      latLng: null,
    },
    venue: {
      address: '',
      latLng: null,
    },
    date: '',
  }

  const validationSchema = Yup.object({
    title: Yup.string().required('You must provide a title'),
    category: Yup.string().required('You must provide a category'),
    description: Yup.string().required(),
    city: Yup.object().shape({
      address: Yup.string().required('City is required'),
    }),
    venue: Yup.object().shape({
      address: Yup.string().required('Venue is required'),
    }),
    date: Yup.string().required(),
  })

  return (
    <Segment clearing>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          selectedEvent
            ? dispatch(updateEvent({ ...selectedEvent, ...values }))
            : dispatch(
                createEvent({
                  ...values,
                  id: cuid(),
                  hostedBy: 'Bob',
                  attendees: [],
                  hostPhotoURL: '/assets/user.png',
                })
              )
          history.push('/events')
        }}
      >
        {({ isSubmitting, dirty, isValid }) => (
          <Form className='ui form'>
            <Header sub color='teal' content='Event Details' />
            <MyTextInput name='title' placeholder='Event title' />
            <MySelectInput
              name='category'
              placeholder='Category'
              options={categoryOptions}
            />
            <MyTextArea name='description' placeholder='Description' />
            <Header sub color='teal' content='Event Location Details' />
            <MyPlaceInput name='city' placeholder='City' />
            <MyPlaceInput name='venue' placeholder='Venue' />
            <MyDateInput
              name='date'
              placeholderText='Event date'
              timeFormat='HH:mm'
              showTimeSelect
              timeCaption='time'
              dateFormat='MMMM d, yyyy h:mm a'
            />
            <Button
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
              type='submit'
              floated='right'
              positive
              content='Submit'
            />
            <Button
              disabled={isSubmitting}
              as={Link}
              to='/events'
              type='submit'
              floated='right'
              content='Cancel'
            />
          </Form>
        )}
      </Formik>
    </Segment>
  )
}
