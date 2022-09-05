import { selector } from 'recoil';
import { IEvent } from '../../interfaces/IEvent';
import { eventFilterState, eventListState } from '../atom';

// Seletores são funções puras que acessam átomos e permitem modificar o estado sem ter que recriar o estado:

export const filteredEventsState = selector({
  key: 'filteredEventsState',
  get: ({ get }) => {
    // É utilizado a função get que tem acesso a todos os átomos, com o átomo em mãos podemos atualizá-lo e retornar o novo valor.
    // Os seletores são usados para calcular dados derivados baseados no atom (estado) existente.
    // Como ocorre no exemplo abaixo, onde precisamos resgatar os filtros aplicados para modificarmos ou não a lista de eventos.
    const filter = get(eventFilterState);
    const allEvents = get(eventListState);
    const events = allEvents.filter((event) => {
      if (!filter.date) return true;
      const filterDate = filter.date.toISOString().slice(0, 10);
      const eventDate = event.start.toISOString().slice(0, 10);
      return filterDate === eventDate;
    });
    return events;
  },
});

export const eventsAsync = selector({
  key: "eventsAsync",
  get: async () => {
    const responseHttp = await fetch('http://localhost:8080/events');
    const eventsJson: IEvent[] = await responseHttp.json();
    return eventsJson.map((event) => ({
      ...event,
      start: new Date(event.start),
      end: new Date(event.end)
    }))
  }
})