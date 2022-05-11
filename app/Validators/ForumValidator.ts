import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ForumValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string({ escape: true, trim: true }, [rules.maxLength(100)]),
    description: schema.string({}, [rules.maxLength(255)])
  })

  public messages = {
    'title.required': 'Title is required',
    'title.maxLength': 'title should be maximum of {{options.maxLength}} characters.',
    'description.required': 'description is required',
    'description.maxLength': 'description should be maximum of {{options.maxLength}} characters.',

  }
}
