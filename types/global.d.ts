interface CustomChartData {
  labels: string[];
  data: number[];
}

interface CandleStickItem {
  id: number;
  x: string;
  open: string;
  close: string;
  high: string;
  low: string;
}

type TCandleStick = CandleStickItem[];
