import { SelectedCoffeContainer } from './styles'
import { Card, CardTitle } from '../../styles'

const SelectedCoffe = () => {
  return (
    <SelectedCoffeContainer>
      <CardTitle>Cafés Selecionados</CardTitle>
      <Card roundedCorner>

        <button type="submit">submit</button>
      </Card>
    </SelectedCoffeContainer>
  )
}

export default SelectedCoffe
