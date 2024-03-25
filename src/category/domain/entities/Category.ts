import { v4 as uuidv4 } from 'uuid';

export interface CategoryProps {
  name: string;
  description?: string;
  is_active?: boolean;
  created_at?: Date;
}

export class Category {
  public readonly id: string;
  constructor(private readonly props: CategoryProps, id?: string) {
    this.id = id || uuidv4();
    this.description = this.props.description;
    this.is_active = this.props.is_active;
    this.props.created_at = this.props.created_at ?? new Date();
  }

  get name() {
    return this.props.name;
  }

  get desription() {
    return this.props.description;
  }

  get is_active() {
    return this.props.is_active;
  }

  get created_at() {
    return this.props.created_at;
  }

  private set description(description: string) {
    this.props.description = description ?? null;
  }

  private set is_active(value: boolean) {
    this.props.is_active = value ?? true;
  }
}
