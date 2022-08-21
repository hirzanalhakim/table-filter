import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import axios from 'axios'
import Example from '.'
import store from '../../redux/store'

jest.mock('axios')

const examplePayload = {
  results: [
    {
      gender: 'female',
      name: {
        title: 'Miss',
        first: 'Elsa',
        last: 'Fuentes',
      },
      location: {
        street: {
          number: 4047,
          name: 'Callejón Sur Rivero',
        },
        city: 'Copandaro',
        state: 'Guanajuato',
        country: 'Mexico',
        postcode: 32185,
        coordinates: {
          latitude: '-65.9259',
          longitude: '172.5450',
        },
        timezone: {
          offset: '+3:00',
          description: 'Baghdad, Riyadh, Moscow, St. Petersburg',
        },
      },
      email: 'elsa.fuentes@example.com',
      login: {
        uuid: '0bbe61a9-4246-4108-bb9e-7e1f0131c4dd',
        username: 'orangemeercat767',
        password: 'dragonba',
        salt: 'egs5l9zO',
        md5: '3e62bf014c61ac53cfe22e2433649d05',
        sha1: '8f026bfacdda3384f76329c5900c53d42bbcd14e',
        sha256:
          'ef02da475b17fdf33f86ab08202c682778e217954e489518b511e96efc5ec531',
      },
      dob: {
        date: '1956-04-22T14:35:45.906Z',
        age: 66,
      },
      registered: {
        date: '1999-10-14T04:27:01.468Z',
        age: 4,
      },
      phone: '(672) 086 6455',
      cell: '(661) 545 1264',
      id: {
        name: 'NSS',
        value: '69 45 35 6131 8',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/81.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/81.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/81.jpg',
      },
      nat: 'MX',
    },
    {
      gender: 'female',
      name: {
        title: 'Ms',
        first: 'Lærke',
        last: 'Christensen',
      },
      location: {
        street: {
          number: 4323,
          name: 'Humlevej',
        },
        city: 'Fredeikssund',
        state: 'Midtjylland',
        country: 'Denmark',
        postcode: 41542,
        coordinates: {
          latitude: '76.2707',
          longitude: '170.3373',
        },
        timezone: {
          offset: '+4:30',
          description: 'Kabul',
        },
      },
      email: 'laerke.christensen@example.com',
      login: {
        uuid: '97d7cc42-4683-441c-aeff-02b8c84ba3f2',
        username: 'biglion856',
        password: 'canada',
        salt: 'mbq0P6Uh',
        md5: '890558cfe821d5366a05fb350f49438f',
        sha1: 'f9ed5834bf498849c7aa4439c5cd04f9a558d55e',
        sha256:
          '0f2056da78772389ac035f4e760fcc534145e00e406078015ef94e14c95d8601',
      },
      dob: {
        date: '1985-01-19T03:53:34.269Z',
        age: 37,
      },
      registered: {
        date: '1999-06-12T15:18:58.592Z',
        age: 2,
      },
      phone: '52155354',
      cell: '15998661',
      id: {
        name: 'CPR',
        value: '180185-1360',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/23.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/23.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/23.jpg',
      },
      nat: 'DK',
    },
    {
      gender: 'female',
      name: {
        title: 'Ms',
        first: 'Solomoniya',
        last: 'Rudik',
      },
      location: {
        street: {
          number: 9497,
          name: 'Radistiv',
        },
        city: 'Lyubotin',
        state: 'Poltavska',
        country: 'Ukraine',
        postcode: 66827,
        coordinates: {
          latitude: '-15.1132',
          longitude: '0.8656',
        },
        timezone: {
          offset: '-6:00',
          description: 'Central Time (US & Canada), Mexico City',
        },
      },
      email: 'solomoniya.rudik@example.com',
      login: {
        uuid: '20548866-e68c-49cb-8275-0b03cdcba6f6',
        username: 'crazyelephant431',
        password: 'hurrican',
        salt: 'RiQjBAfo',
        md5: 'f3701f4ad8a252f83b6ff9dba93c33bb',
        sha1: '49b2176bd3eb9eaf2e6c8d6b46363e056e9a8a82',
        sha256:
          'ff4896729d542c46967b9edc9f24c4a4bfe3897dd611df9c09af8460d00b2e47',
      },
      dob: {
        date: '1947-10-13T15:50:13.945Z',
        age: 74,
      },
      registered: {
        date: '1999-02-01T03:18:19.736Z',
        age: 6,
      },
      phone: '(068) S09-1300',
      cell: '(098) F50-2619',
      id: {
        name: '',
        value: null,
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/84.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/84.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/84.jpg',
      },
      nat: 'UA',
    },
  ],
  info: {
    seed: 'magic-test',
    results: 10,
    page: 1,
    version: '1.4',
  },
}

// axios.get.mockResolvedValueOnce({ data: examplePayload })

test('Renders Example Project', async () => {
  axios.get.mockResolvedValueOnce({ data: examplePayload })
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Example />
      </BrowserRouter>
    </Provider>
  )
  await waitFor(() => {
    expect(screen.getByText(/elsa.fuentes@example.com/i)).toBeInTheDocument()
  })
  expect(screen.getByText(/Example App/i)).toBeInTheDocument()
  expect(screen.getByText(/Home/i)).toBeInTheDocument()
})

test('Try Filter and Clear Example Project', async () => {
  axios.get.mockResolvedValue({ data: examplePayload })
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Example />
      </BrowserRouter>
    </Provider>
  )
  await waitFor(() => {
    expect(screen.queryByTestId('loading')).not.toBeInTheDocument()
  })

  fireEvent.click(screen.getByTestId('sort_username'))
  await waitFor(() => {
    expect(screen.getByText(/elsa.fuentes@example.com/i)).toBeInTheDocument()
  })
  fireEvent.click(screen.getByTestId('sort_username'))
  await waitFor(() => {
    expect(screen.getByText(/elsa.fuentes@example.com/i)).toBeInTheDocument()
  })
  fireEvent.click(screen.getByTestId('sort_name'))
  await waitFor(() => {
    expect(screen.getByText(/elsa.fuentes@example.com/i)).toBeInTheDocument()
  })
  fireEvent.click(screen.getByTestId('sort_name'))
  await waitFor(() => {
    expect(screen.getByText(/elsa.fuentes@example.com/i)).toBeInTheDocument()
  })
  fireEvent.click(screen.getByTestId('sort_email'))
  await waitFor(() => {
    expect(screen.getByText(/elsa.fuentes@example.com/i)).toBeInTheDocument()
  })
  fireEvent.click(screen.getByTestId('sort_gender'))
  await waitFor(() => {
    expect(screen.getByText(/elsa.fuentes@example.com/i)).toBeInTheDocument()
  })
  fireEvent.click(screen.getByTestId('sort_registeredDate'))
  await waitFor(() => {
    expect(screen.getByText(/elsa.fuentes@example.com/i)).toBeInTheDocument()
  })

  fireEvent.change(screen.getByTestId('search_input'), {
    target: { value: 'asd' },
  })
  await waitFor(() => {
    expect(screen.getByText(/elsa.fuentes@example.com/i)).toBeInTheDocument()
  })
  expect(screen.getByTestId('search_input').value).toBe('asd')

  fireEvent.change(screen.getByTestId('search_input'), {
    target: { value: 'qwe' },
  })
  await waitFor(() => {
    expect(screen.getByText(/elsa.fuentes@example.com/i)).toBeInTheDocument()
  })
  expect(screen.getByTestId('search_input').value).toBe('qwe')

  fireEvent.change(screen.getByTestId('select_gender'), {
    target: { value: 'male' },
  })
  await waitFor(() => {
    expect(screen.getByText(/elsa.fuentes@example.com/i)).toBeInTheDocument()
  })
  expect(screen.getByTestId('select_gender').value).toBe('male')

  fireEvent.change(screen.getByTestId('select_gender'), {
    target: { value: 'female' },
  })
  await waitFor(() => {
    expect(screen.getByText(/elsa.fuentes@example.com/i)).toBeInTheDocument()
  })
  expect(screen.getByTestId('select_gender').value).toBe('female')

  fireEvent.change(screen.getByTestId('select_gender'), {
    target: { value: 'all' },
  })
  await waitFor(() => {
    expect(screen.getByText(/elsa.fuentes@example.com/i)).toBeInTheDocument()
  })
  expect(screen.getByTestId('select_gender').value).toBe('all')

  fireEvent.click(screen.getByTestId('reset_filter'))
  await waitFor(() => {
    expect(screen.getByText(/elsa.fuentes@example.com/i)).toBeInTheDocument()
  })
  expect(screen.getByTestId('search_input').value).toBe('')
  expect(screen.getByTestId('select_gender').value).toBe('all')
})

test('Try Table Example Project', async () => {
  axios.get.mockResolvedValue({ data: examplePayload })
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Example />
      </BrowserRouter>
    </Provider>
  )
  await waitFor(() => {
    expect(screen.getByText(/elsa.fuentes@example.com/i)).toBeInTheDocument()
  })
  expect(screen.getByTestId('table-example')).toBeInTheDocument()
  fireEvent.click(screen.getByTestId('KeyboardArrowRightIcon'))
  await waitFor(() => {
    expect(screen.getByText(/elsa.fuentes@example.com/i)).toBeInTheDocument()
  })
  fireEvent.click(screen.getByTestId('KeyboardArrowLeftIcon'))
  await waitFor(() => {
    expect(screen.getByText(/elsa.fuentes@example.com/i)).toBeInTheDocument()
  })
  expect(screen.getByText(/Rows per page/i)).toBeInTheDocument()
})
