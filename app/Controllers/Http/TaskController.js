'use strict'

const Task = use('App/Models/Task')
const {
  validateAll
} = use('Validator')

class TaskController {

  async index({
    view
  }) {

    const tasks = await Task.all()

    return view.render('tasks.list', {
      tasks: tasks.toJSON()
    })
  }

  create({
    view
  }) {
    return view.render('tasks.create')
  }

  async store({
    request,
    response,
    session
  }) {
    const messages = {
      'title.required': 'required',
      'title.min': 'min 5',
      'title.max': 'max 140',
      'body.required': 'required',
      'body.min': 'min 10',
    }

    const data = request.only(['title', 'body'])

    const validation = await validateAll(data, {
      title: 'required|min:5|max:140',
      body: 'required|min:10',
    }, messages)

    if (validation.fails()) {
      session.withErrors(validation.messages()).flashAll()
      return response.redirect('back')
    }

    await Task.create(data)

    session.flash({
      notification: 'Task saved!'
    })

    return response.redirect('/task/list')Your index contains uncommitted changes.
  }

  async update({
    params,
    request,
    response,
    session
  }) {
    const messages = {
      'title.required': 'required',
      'title.min': 'min 5',
      'title.max': 'max 140',
      'body.required': 'required',
      'body.min': 'min 10',
    }

    const data = request.only(['title', 'body'])

    const validation = await validateAll(data, {
      title: 'required|min:5|max:140',
      body: 'required|min:10',
    }, messages)

    if (validation.fails()) {
      session.withErrors(validation.messages()).flashAll()
      return response.redirect('back')
    }

    const task = await Task.findOrFail(params.id)

    task.merge(data)

    await task.save()

    session.flash({
      notification: 'Task updated!'
    })

    return response.redirect('/task/list')
  }

  async details({
    params,
    view
  }) {
    const task = await Task.findOrFail(params.id)

    return view.render('tasks.details', {
      task: task
    })
  }

  async remove({
    params,
    response,
    session
  }) {
    const task = await Task.find(params.id)
    await task.delete()
    session.flash({
      notification: 'Task removed!'
    })

    return response.redirect('/task/list')
  }

  async edit({
    params,
    view
  }) {
    const task = await Task.findOrFail(params.id)

    return view.render('tasks.edit', {
      task: task
    })
  }
}

module.exports = TaskController
