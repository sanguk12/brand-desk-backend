/*
 * Created on 2004-11-23
 *
 */
package org.hibernate.tool.internal.reveng;

import org.hibernate.HibernateException;

import java.io.ObjectStreamClass;

/**
 * @author max
 *
 */
public class JdbcBinderException extends HibernateException {

	private static final long serialVersionUID =
			ObjectStreamClass.lookup(JdbcBinderException.class).getSerialVersionUID();

	/**
	 * @param string
	 * @param root
	 */
	public JdbcBinderException(String string, Throwable root) {
		super(string, root);
	}
	/**
	 * @param root
	 */
	public JdbcBinderException(Throwable root) {
		super(root);
	}
	/**
	 * @param s
	 */
	public JdbcBinderException(String s) {
		super(s);
	}

}
